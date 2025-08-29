Write-Host "Building and deploying portfolio website..." -ForegroundColor Green
Write-Host ""

Write-Host "Step 1: Building the project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Please check for errors." -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit 1
}

Write-Host ""
Write-Host "Step 2: Build completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Step 3: Deploy options:" -ForegroundColor Cyan
Write-Host ""

Write-Host "Option A - Netlify (Recommended):" -ForegroundColor Yellow
Write-Host "1. Go to https://netlify.com" -ForegroundColor White
Write-Host "2. Sign up/Login with GitHub" -ForegroundColor White
Write-Host "3. Click 'New site from Git'" -ForegroundColor White
Write-Host "4. Choose your repository: Moonythemoon/nate-portfolio-website" -ForegroundColor White
Write-Host "5. Build command: npm run build" -ForegroundColor White
Write-Host "6. Publish directory: build" -ForegroundColor White
Write-Host "7. Click 'Deploy site'" -ForegroundColor White
Write-Host ""

Write-Host "Option B - Vercel:" -ForegroundColor Yellow
Write-Host "1. Go to https://vercel.com" -ForegroundColor White
Write-Host "2. Sign up/Login with GitHub" -ForegroundColor White
Write-Host "3. Import your repository" -ForegroundColor White
Write-Host "4. Deploy automatically" -ForegroundColor White
Write-Host ""

Write-Host "Option C - Surge.sh:" -ForegroundColor Yellow
Write-Host "1. Install: npm install -g surge" -ForegroundColor White
Write-Host "2. Run: surge build" -ForegroundColor White
Write-Host ""

Read-Host "Press Enter to continue"
