<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ==============================================================================
// 🔒 SECURITY WARNING: 
// Never share this file publicly or commit it to GitHub with your real API key!
// ==============================================================================
$API_TOKEN = 'w52jiz5l8e57dnz39658jly26rgfiixgdj3wr7addpnkfwbts8mwmf55uratoahodjsqxx5e6qx1wz1m40mqx8z1ku7cd1uoi9ijgynyxtbim2lulqporjwbg9pkguo4qvc55e21g7hb30tlwa0iytt6vmw9ld99gf2y5qyhyfub59d0503w2t4qqugq7apj8djwzt0kqvcn0rirkp6egjtzyomepqm05sfnz6er92qxmg5nui2k6xfbeafxbq4r';

if (empty($API_TOKEN) || $API_TOKEN === 'PASTE_YOUR_GENYMOTION_API_KEY_HERE') {
    http_response_code(500);
    echo json_encode(['error' => 'API Key not configured']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
$uuid = $input['uuid'] ?? '';

if (empty($uuid)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing instance UUID']);
    exit();
}

// 1. Initialize cURL to call Genymotion SaaS API to DELETE the instance
$ch = curl_init("https://api.geny.io/v1/instances/" . urlencode($uuid));

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $API_TOKEN,
    'Accept: application/json'
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code >= 200 && $http_code < 300) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code($http_code);
    echo json_encode(['error' => 'Failed to stop emulator', 'details' => json_decode($response)]);
}
?>
