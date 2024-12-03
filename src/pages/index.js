import * as React from "react"

import logo from "../images/beconfidentgroup.jpg"
import ccpic from "../images/cc_pic.jpg"
import cclogo from "../images/cc_logo.png"
import brpic from "../images/br_pic.jpg"
import brlogo from "../images/br_logo.jpg"

const IndexPage = () => {
  return (
    <main className="container md:h-screen flex justify-center items-center max-w-screen-xl">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="flex flex-col justify-between">
          <img src={logo} alt="Be Confident Group" className="w-40"/>

          <div className="flex flex-col justify-center">
            <div className="text-gray-700 text-2xl font-light mb-4">
              Two great companies with a common vision:
            </div>

            <div className="text-ccoms text-6xl font-bold">
              Great things happen when people cycle
            </div>
          </div>

          <div className="text-sm">
            For more information about the group contact <a href="mailto:david@beconfidentgroup.com" className="text-ccoms underline">david@beconfidentgroup.com</a>.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <a href="https://cycleconfident.com" target="_blank" rel="noreferrer">
            <div class="h-full flex flex-col justify-between rounded shadow-lg">
              <img src={ccpic} alt="Cycle Confident" className="h-full object-cover" />
              <div class="px-6 py-4">
                <img src={cclogo} alt="Cycle Confident" class="h-12 mb-4" />
                <p class="text-gray-700 text-base font-light">
                Our operations in London and the South
                </p>
              </div>
            </div>
          </a>

          <a href="https://bikeright.co.uk" target="_blank" rel="noreferrer">
            <div class="h-full flex flex-col justify-between rounded shadow-lg">
              <img src={brpic} alt="BikeRight" className="h-full object-cover" />
              <div class="px-6 py-4">
                <img src={brlogo} alt="BikeRight" class="h-12 mb-4" />
                <p class="text-gray-700 text-base font-light">
                Our operations in the North and Midlands
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Be Confident</title>
