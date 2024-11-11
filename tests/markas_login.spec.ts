import { test, expect } from '@playwright/test';
import * as fs from 'fs'; 
import * as path from 'path';
const filePath: string = path.join(__dirname, 'selector.json');
let selectors;
try { 
  const data: string = fs.readFileSync(filePath, 'utf8'); 
  selectors = JSON.parse(data); console.log('File content:', selectors); 
} 
  catch (err) { 
    console.error('Error reading file:', (err as NodeJS.ErrnoException).message); 
  }
test('@test_login_markas', async ({ page }) => {
  await page.goto('https://markas.staging.belajar.id/login');
  await page.locator(selectors.login_page.masukkan_email).click();
  await page.locator(selectors.login_page.masukkan_email).fill('skm@kemdikbud.go.id');
  await page.locator(selectors.login_page.masukkan_password).click();
  await page.locator(selectors.login_page.masukkan_password).fill('Default#1234!');
  await page.locator(selectors.login_page.dropdown_tahun_anggaran).click();
  await page.locator(selectors.login_page.dropdown_tahun_anggaran.tahun_anggaran_2021).click();
  await page.locator(selectors.login_page.dropdown_tahun_anggaran.tahun_anggaran_2022).click();
});