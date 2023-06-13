import React, { useEffect, useState } from "react";

function RightFooter() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`right-footer ${isSticky ? "sticky" : ""}`}>
      <div className="footer">
        <div className="copyright">© 2023 Lenster</div>
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Discord</a>
        <a href="">Donate</a>
        <a href="">Status</a>
      </div>
      <div className="footer-2">
        <a href="">Feedback</a>
        <a href="">Thanks</a>
        <a href="">Github</a>
        <a href="">Translate</a>
      </div>
    </div>
  );
}

export default RightFooter;
