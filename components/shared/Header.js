import React from "react";
import Link from "next/link";
import { Link as NextLink } from "../../routes";

import "../../styles/main.scss";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        {/* <NextLink route="test" params={{ id: "2" }}>
          Test 2
        </NextLink>
        <NextLink route="/test/5"> Tets 5 </NextLink> */}

        <style jsx>{"a {font-size: 20px;}; .customStyle{color:red};"}</style>
      </React.Fragment>
    );
  }
}

export default Header;
