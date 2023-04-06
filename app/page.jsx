import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>Welcome to Traversey Media</div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
