@echo off
echo "# rich-mining" >> README.md
git init
git add .
git commit -m "Initial commit of Rich Mining LLC landing page"
git branch -M main
git remote add origin https://github.com/Little01Giant/rich-mining.git
git push -u origin main
pause
