@echo off
echo Building and deploying to Netlify...
echo.

echo Step 1: Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

echo.
echo Step 2: Build completed successfully!
echo.
echo Step 3: Deploy options:
echo.
echo Option A - Netlify (Recommended):
echo 1. Go to https://netlify.com
echo 2. Sign up/Login with GitHub
echo 3. Click "New site from Git"
echo 4. Choose your repository: Moonythemoon/nate-portfolio-website
echo 5. Build command: npm run build
echo 6. Publish directory: build
echo 7. Click "Deploy site"
echo.
echo Option B - Vercel:
echo 1. Go to https://vercel.com
echo 2. Sign up/Login with GitHub
echo 3. Import your repository
echo 4. Deploy automatically
echo.
echo Option C - Surge.sh:
echo 1. Install: npm install -g surge
echo 2. Run: surge build
echo.
pause
