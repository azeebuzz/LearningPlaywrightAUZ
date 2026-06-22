@echo off
REM Script to add, commit, and push the "JS Practice" folder
cd /d "%~dp0"
git add "JS Practice"
for /f "delims=" %%i in ('git status --porcelain') do set CHANGES=1
if not defined CHANGES (
  echo No changes in "JS Practice" to commit.
  exit /b 0
)
git commit -m "Add JS Practice folder"
git push
