import React from "react"
import { Tab, Box } from "@mui/material"
import { TabContext, TabList } from "@mui/lab"
import { MORE } from "../../utils/routes.js"
import { useNavigate } from "react-router-dom"
import { ROUTES_ARR } from "./Constants"
import { ReactComponent as LightBolb } from "../../Assets/light-bulb_2.svg"
import "./Header.scss"
const Header = () => {
  const url = window.location.href.split("/").pop()
  const [value, setValue] = React.useState(`/${url}`)
  let history = useNavigate()
  const handleChange = (event, newValue) => {
    history(newValue)
    setValue(newValue)
  }

  return (
    <div className="header">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            classes={{
              indicator: "tabs-indicator",
            }}
            centered
            onChange={handleChange}
          >
            {ROUTES_ARR.map((item, idx) => (
              <Tab
                classes={{
                  selected: "tabs-selected",
                }}
                key={`${"tab" + idx}`}
                label={
                  item.route !== MORE ? (
                    item.name
                  ) : (
                    <div>
                      {item.name} <LightBolb style={{ width: "10px" }} />
                    </div>
                  )
                }
                value={item.route}
              />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </div>
  )
}

export default Header
