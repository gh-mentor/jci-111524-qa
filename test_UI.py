using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace WebAppTests
{
    [TestClass]
    public class LoginTests
    {
        private IWebDriver driver;

        [TestInitialize]
        public void Setup()
        {
            driver = new ChromeDriver();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
        }

        [TestMethod]
        public void TestLogin()
        {
            driver.Navigate().GoToUrl("http://yourwebapp.com/login");

            var usernameField = driver.FindElement(By.Id("username"));
            var passwordField = driver.FindElement(By.Id("password"));
            var loginButton = driver.FindElement(By.Id("loginButton"));

            usernameField.SendKeys("testuser");
            passwordField.SendKeys("password");
            loginButton.Click();

            var welcomeMessage = driver.FindElement(By.Id("welcomeMessage"));
            Assert.IsTrue(welcomeMessage.Displayed);
        }

        [TestCleanup]
        public void Teardown()
        {
            driver.Quit();
        }
    }
}