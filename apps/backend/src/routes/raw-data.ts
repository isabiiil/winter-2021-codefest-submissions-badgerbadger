import { Router } from "express";

import { Class } from "@shared/interfaces/class";

const route = Router();

// given an array of ReqData
// which class fulfills multiple req's?
// returns a JSON containing {classname:occurences}
const getMultiReqClasses = (classes: Class[]) => {
  let out: any = {};
  for (let x of classes) {
    for (let y of x.fulfilling_classes) {
      // if the class has not been seen before
      if (!out.hasOwnProperty(y)) {
        // set it to 0
        out[y] = 0;
        continue;
      }
      // increment it otherwise
      out[y]++;
    }
  }

  let formatted_out = [];
  for (var i in out) {
    formatted_out.push([i, out[i]]);
  }
  return formatted_out;
};

route.get("/raw-data", (_req, res) => {
  const rawdata: Class[] = [
    {
      requirement: "pluralism_and_diversity",
      fulfilling_classes: ["mood101", "mood102", "mood103"],
    },
    {
      requirement: "writing_intensive",
      fulfilling_classes: ["alex101", "mood103", "tanmoy203"],
    },
    {
      requirement: "stem",
      fulfilling_classes: ["alex101", "monique202"],
    },
    {
      requirement: "major",
      fulfilling_classes: ["monique202"],
    },
  ];

  console.log(getMultiReqClasses(rawdata));

  res.send(rawdata);
});

export default route;
