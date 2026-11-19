# One-command APK publish: builds the latest app, copies it, commits and pushes.
# Usage (from the website folder):  .\update-apk.ps1
$ErrorActionPreference = "Stop"
$androidProject = "C:\Users\prince\AndroidStudioProjects\PundarApp"
$site = $PSScriptRoot

Push-Location $androidProject
.\gradlew.bat assembleDebug
if ($LASTEXITCODE -ne 0) { Pop-Location; throw "Gradle build failed" }
Pop-Location

Copy-Item "$androidProject\app\build\outputs\apk\debug\app-debug.apk" "$site\public\pundar.apk" -Force

# Bump the version stamp so browsers/CDN never serve a cached old APK
$stamp = Get-Date -Format "yyyyMMddHHmmss"
Set-Content -Path "$site\public\apk-version.txt" -Value $stamp -NoNewline
(Get-Content "$site\src\lib\apk.ts") -replace 'APK_VERSION = "\d*"', "APK_VERSION = `"$stamp`"" | Set-Content "$site\src\lib\apk.ts"

Push-Location $site
git add public/pundar.apk public/apk-version.txt src/lib/apk.ts
git commit -m "Update APK ($stamp)"
git push origin main
Pop-Location
Write-Host "Done. Version $stamp will be live in ~2 minutes."
