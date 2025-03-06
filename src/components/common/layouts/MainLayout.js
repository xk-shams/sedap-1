import React, { use, useEffect, useState } from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import { useRouter } from "next/router";

function MainLayout(props) {
  const router = useRouter();
    const user = null;

    useEffect(() => {
        console.log('hey')
        console.log('qowildi')
        // if (!user) {
        //     router.replace('/register')
        // }

        return () => {
            console.log('Hayr maktabim');
        }

    }, [router])

    // useEffect function 2 ta argument oladi
    // 1chisi callback function 

    // const [value, setValue] = useState() can be => any data type

    // mount
    // update => should update or should not update
    // unmount
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div>
        <Navigation />
      </div>
      <div>{props.children}</div>
    </main>
  );
}

export default MainLayout;
