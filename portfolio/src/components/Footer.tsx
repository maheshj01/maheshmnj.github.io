import * as React from "react";
import { Component } from "react";

export default function Footer(props: any) {
  return (
    <>
      <h3>Footer</h3>
      <p>All rights reserved &copy; {props.year}</p>
      {props.children}
    </>
  );
}
