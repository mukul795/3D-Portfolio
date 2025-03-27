const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/mukul795"><img src="/assets/github.svg" alt="github" className="w-6 h-6 p-1" />
          </a>
        </div>
        <div className="social-icon">
        <a href="https://www.reddit.com/user/obi_wankenobi69/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"><img src="/assets/reddit.jpeg" alt="reddit" className="w-6 h-6 p-1" />
        </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/mukul-mishra-bb878b338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/assets/linkedin.jpeg" alt="linkedin" className="w-6 h-6 p-1" />
          </a>
        </div>
      </div>

      <p className="text-white-500">Copyright © 2025 Mukul Mishra and Vaibhav Sharma . All rights reserved.</p>
    </footer>
  );
};

export default Footer;
