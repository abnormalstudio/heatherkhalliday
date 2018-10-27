import React from "react"

import {
  Aside,
  Lastname,
  Line,
  Listitem,
  Name,
  Navigation,
  Navlink,
  Navlist
} from "./styles"

const SideBar = () => (
  <Aside>
    <Name>HEATHER K.</Name>
    <Lastname>Halliday</Lastname>
    <Line />
    <Navigation>
      <Navlist>
        <Listitem>
          <Navlink to="/">HOME</Navlink>
        </Listitem>
        <Listitem>
          <Navlink to="/about">ABOUT</Navlink>
        </Listitem>
        <Listitem>
          <Navlink to="/contact">CONTACT</Navlink>
        </Listitem>
      </Navlist>
    </Navigation>
  </Aside>
)

export default SideBar
