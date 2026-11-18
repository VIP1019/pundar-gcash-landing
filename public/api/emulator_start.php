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

// The specific Android Recipe UUID you want to launch (e.g., Pixel 7, Android 13)
// You can get this from your Genymotion SaaS dashboard -> Templates
$RECIPE_UUID = 'c75ff835-60e7-46ab-9469-9b21b72727ae';

if (empty($API_TOKEN) || $API_TOKEN === 'PASTE_YOUR_GENYMOTION_API_KEY_HERE') {
    http_response_code(500);
    echo json_encode(['error' => 'API Key not configured in emulator_start.php']);
    exit();
}

// 1. Initialize cURL to call Genymotion SaaS API
$ch = curl_init("https://api.geny.io/v1/instances");

$payload = json_encode([
    'recipe_uuid' => $RECIPE_UUID,
    'name' => 'PUNDAR Live Demo - ' . time()
]);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_USERAGENT, 'Genymotion-Client/1.0 PundarApp');
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
    echo $response; // Return Genymotion data (contains instance UUID and Web Player URL)
} else {
    http_response_code(500); // Send 500 to frontend so it throws error
    echo json_encode([
        'error' => 'Genymotion API rejected the request', 
        'genymotion_http_code' => $http_code,
        'genymotion_raw_response' => $response
    ]);
}
?>
