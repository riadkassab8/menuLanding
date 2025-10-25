@echo off
echo ========================================
echo   Cleanup Script - Menu Plus Project
echo ========================================
echo.

echo This script will:
echo 1. Delete old optimized files
echo 2. Delete test files
echo 3. Move documentation to docs folder
echo.

set /p choice="Do you want to continue? (Y/N): "
if /i "%choice%" neq "Y" goto :end

echo.
echo [1/3] Deleting old optimized files...
if exist index-optimized.html del index-optimized.html
if exist style-optimized.css del style-optimized.css
if exist app-optimized.js del app-optimized.js
echo Done!

echo.
echo [2/3] Deleting test files...
if exist test-performance.js del test-performance.js
if exist PERFORMANCE-TEST-REPORT.txt del PERFORMANCE-TEST-REPORT.txt
echo Done!

echo.
echo [3/3] Moving documentation to docs folder...
if not exist docs mkdir docs
if exist FINAL-SUMMARY.md move FINAL-SUMMARY.md docs\
if exist START-HERE.md move START-HERE.md docs\
if exist HOW-TO-TEST-PERFORMANCE.md move HOW-TO-TEST-PERFORMANCE.md docs\
if exist DOCUMENTATION-INDEX.md move DOCUMENTATION-INDEX.md docs\
if exist CHECKLIST.md move CHECKLIST.md docs\
if exist SUMMARY.md move SUMMARY.md docs\
if exist COMPARISON.md move COMPARISON.md docs\
if exist QUICK-START.md move QUICK-START.md docs\
if exist README-OPTIMIZATION.md move README-OPTIMIZATION.md docs\
if exist performance-report.md move performance-report.md docs\
if exist ESSENTIAL-FILES.md move ESSENTIAL-FILES.md docs\
echo Done!

echo.
echo ========================================
echo   Cleanup Complete!
echo ========================================
echo.
echo Remaining files:
echo   - index.html
echo   - style.css
echo   - script.js
echo   - .htaccess
echo   - sw.js
echo   - favicon.svg
echo   - attached_assets/
echo   - README.md
echo   - .gitignore
echo   - docs/ (documentation)
echo.
echo Your project is now clean and organized!
echo.

:end
pause
