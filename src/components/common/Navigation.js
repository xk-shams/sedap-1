import React from "react";
import Link from "next/link";

function Navigation(props) {
  return (
    <div>
      <div
        style={{
            backgroundColor: 'aliceblue',
            display: 'flex',
            flexDirection: 'column'
        }}
      >
        <Link href="/">
          Dashboard
        </Link>
        <Link href="/orders">
          Order List
        </Link>
        <Link href="#">
          Order Detail
        </Link>
        <Link href="/customers">
          Customer
        </Link>
        <Link href="#">
          Analytics
        </Link>
        <Link href="#">
          Reviews
        </Link>
        <Link href="#">
          Foods
        </Link>
        <Link href="#">
          Food Detail
        </Link>
        <Link href="#">
          Customer Detail
        </Link>
        <Link href="#">
          Calendar
        </Link>
        <Link href="#">
          Chat
        </Link>
        <Link href="#">
          Wallet
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
