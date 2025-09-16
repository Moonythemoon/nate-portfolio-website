@echo off
echo 🚀 Deploying Moony Resume Portfolio...
echo.

echo 📦 Building project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.

echo 📁 Build folder ready at: build/
echo.

echo 🌐 Deployment Options:
echo 1. Netlify: Drag 'build' folder to netlify.com
echo 2. Vercel: Run 'npx vercel --prod'
echo 3. GitHub Pages: Run 'npm run deploy'
echo 4. Firebase: Run 'firebase deploy'
echo.

echo 🎯 Recommended: Go to netlify.com and drag the 'build' folder!
echo.

pause
