import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Radio,
  Button,
  Image,
  RadioGroup,
  Spacer,
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableColumn
} from "@nextui-org/react";

export const ErgonomicRiskTable: React.FC = () => {
  const [painValue, setPainValue] = useState<string | null>(null);
  const [currentCard, setCurrentCard] = useState(1);
  
  const [neckPostureValue, setneckPostureValue] = useState<number>(0);
  const [neckRepetitionValue, setneckRepetitionValue] = useState<number>(0);
  const [neckmdlValue, setNeckmdlValue] = useState<number>(0); // Neck model value

  // Back
  const [backPostureValue, setbackPostureValue] = useState<number>(0);
  const [backRepetitionValue, setBackRepetitionValue] = useState<number>(0);
  const [backmdlValue, setBackmdlValue] = useState<number>(0); // Back model value

  // Shoulder
  const [shoulderPostureValue, setShoulderPostureValue] = useState<number>(0);
  const [shoulderRepetitionValue, setShoulderRepetitionValue] = useState<number>(0);
  const [shouldermdlLeftValue, setShouldermdlLeftValue] = useState<number>(0); // Left shoulder model value
  const [shouldermdlRightValue, setShouldermdlRightValue] = useState<number>(0); // Right shoulder model value

  // Upper Arm
  const [upperArmPostureValue, setUpperArmPostureValue] = useState<number>(0);
  const [upperArmRepetitionValue, setUpperArmRepetitionValue] = useState<number>(0);
  const [upperArmmdlLeftValue, setUpperArmmdlLeftValue] = useState<number>(0); // Left upper arm model value
  const [upperArmmdlRightValue, setUpperArmmdlRightValue] = useState<number>(0); // Right upper arm model value

  // Lower Arm
  const [lowerArmPostureValue, setLowerArmPostureValue] = useState<number>(0);
  const [lowerArmRepetitionValue, setLowerArmRepetitionValue] = useState<number>(0);
  const [lowerArmmdlLeftValue, setLowerArmmdlLeftValue] = useState<number>(0); // Left lower arm model value
  const [lowerArmmdlRightValue, setLowerArmmdlRightValue] = useState<number>(0); // Right lower arm model value

  // Wrist
  const [wristPostureValue, setWristPostureValue] = useState<number>(0);
  const [wristRepetitionValue, setWristRepetitionValue] = useState<number>(0);
  const [wristmdlLeftValue, setWristmdlLeftValue] = useState<number>(0); // Left wrist model value
  const [wristmdlRightValue, setWristmdlRightValue] = useState<number>(0); // Right wrist model value

  // Knee
  const [kneePostureValue, setKneePostureValue] = useState<number>(0);
  const [kneeRepetitionValue, setKneeRepetitionValue] = useState<number>(0);
  const [kneemdlLeftValue, setKneemdlLeftValue] = useState<number>(0); // Left knee model value
  const [kneemdlRightValue, setKneemdlRightValue] = useState<number>(0); // Right knee model value

  // Leg
  const [legPostureValue, setLegPostureValue] = useState<number>(0);
  const [legRepetitionValue, setLegRepetitionValue] = useState<number>(0);
  const [legmdlLeftValue, setLegmdlLeftValue] = useState<number>(0); // Left leg model value
  const [legmdlRightValue, setLegmdlRightValue] = useState<number>(0); // Right leg model value

  // Hand Grips
  const [handGripsPostureValue, setHandGripsPostureValue] = useState<number>(0);
  const [handGripsmdLeftlValue, setHandGripsmdlLeftValue] = useState<number>(0); // Hand grips model value
  const [handGripsmdRightlValue, setHandGripsmdlRightValue] = useState<number>(0); // Hand grips model value

  // Task Duration
  const [taskDurationValue, setTaskDurationValue] = useState<number>(0); // Task hours per day

  // Load
  const [loadValue, setLoadValue] = useState<number>(0); // Load value

  // Job Demand
  const [jobDemandValue, setJobDemandValue] = useState<number>(0); // Job Demand value

  // Job Satisfaction
  const [jobSatisfactionValue, setJobSatisfactionValue] = useState<number>(0); // Job Satisfaction value

  // Social Support
  const [socialSupportValue, setSocialSupportValue] = useState<number>(0); // Social Support value

  // Neck
  const neckBPscore = neckPostureValue + neckRepetitionValue;
  const necktotalscore = neckBPscore + neckmdlValue;

  // Back
  const backBPscore = backPostureValue + backRepetitionValue;
  const backtotalscore = backBPscore + backmdlValue;

  // Shoulder
  const shoulderBPscore = shoulderPostureValue + shoulderRepetitionValue;
  const shouldertotalscore = shoulderBPscore + (shouldermdlLeftValue + shouldermdlRightValue);

  // Upper Arm
  const upperArmBPscore = upperArmPostureValue + upperArmRepetitionValue;
  const upperArmtotalscore = upperArmBPscore + (upperArmmdlLeftValue + upperArmmdlRightValue);

  // Lower Arm
  const lowerArmBPscore = lowerArmPostureValue + lowerArmRepetitionValue;
  const lowerArmtotalscore = lowerArmBPscore + (lowerArmmdlLeftValue + lowerArmmdlRightValue);

  // Wrist
  const wristBPscore = wristPostureValue + wristRepetitionValue;
  const wristhandtotalscore = wristBPscore + (wristmdlLeftValue + wristmdlRightValue);

  // Knee
  const kneeBPscore = kneePostureValue + kneeRepetitionValue;
  const kneetotalscore = kneeBPscore + (kneemdlLeftValue + kneemdlRightValue);

  // Leg
  const legBPscore = legPostureValue + legRepetitionValue;
  const legtotalscore = legBPscore + (legmdlLeftValue + legmdlRightValue);

  // Hand Grips
  const handGripsBPscore = handGripsPostureValue; // Hand grips only have posture
  const handGripstotalscore = handGripsBPscore + (handGripsmdLeftlValue + handGripsmdRightlValue);

  // Task Duration (example of adding)
  const taskDurationScore = taskDurationValue;

  // Load (example of adding)
  const loadScore = loadValue;

  // Job Demand (example of adding)
  const jobDemandScore = jobDemandValue;

  // Job Satisfaction (example of adding)
  const jobSatisfactionScore = jobSatisfactionValue;

  // Social Support (example of adding)
  const socialSupportScore = socialSupportValue;

  const [gender, setGender] = useState("male"); // Default gender is male

  const handleGenderChange = (event:any) => {
    setGender(event.target.value);
  };

  const totalBPScore =
  neckBPscore +
  backBPscore +
  shoulderBPscore +
  lowerArmBPscore +
  wristBPscore +
  kneeBPscore +
  legBPscore +
  handGripsBPscore +
  taskDurationScore +
  loadScore +
  jobDemandScore +
  jobSatisfactionScore +
  socialSupportScore;

const totalMDLScore =
  neckmdlValue +
  backmdlValue +
  (shouldermdlLeftValue + shouldermdlRightValue) +
  (lowerArmmdlLeftValue + lowerArmmdlRightValue) +
  (wristmdlLeftValue + wristmdlRightValue) +
  (kneemdlLeftValue + kneemdlRightValue) +
  (legmdlLeftValue + legmdlRightValue)+
  (handGripsmdLeftlValue + handGripsmdRightlValue);

const totalScore =
  necktotalscore +
  backtotalscore +
  shouldertotalscore +
  lowerArmtotalscore +
  wristhandtotalscore +
  kneetotalscore +
  legtotalscore +
  handGripstotalscore +
  taskDurationScore +
  loadScore +
  jobDemandScore +
  jobSatisfactionScore +
  socialSupportScore;

  let riskLevel = "";
let action = "";

if (totalScore >= 0 && totalScore <= 26) {
  riskLevel = "Negligible risk";
  action = "No action required";
} else if (totalScore >= 27 && totalScore <= 57) {
  riskLevel = "Low risk";
  action = "Change may be required";
} else if (totalScore >= 58 && totalScore <= 112) {
  riskLevel = "Medium risk";
  action = "Vigilance, improvements to consider";
} else if (totalScore >= 113 && totalScore <= 139) {
  riskLevel = "High risk";
  action = "Improvements needed";
} else if (totalScore >= 140 && totalScore <= 168) {
  riskLevel = "Very high risk";
  action = "Immediate changes";
} else {
  riskLevel = "Unknown";
  action = "Invalid score";
}

  const handleNext = () => {
    if (currentCard < 13) setCurrentCard((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentCard > 1) setCurrentCard((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      {/* Card 1: Neck */}
      {currentCard === 1 && (
       <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
       <CardHeader className="bg-teal-500 text-white rounded-t-lg flex flex-col items-center">
         <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
         <h4 className="text-md">Body Part: Neck</h4>
       </CardHeader>
       <Divider />
       <CardBody className="bg-white">
         <div className="flex flex-wrap justify-between gap-4">
           {/* Kolom 1A: Posture */}
           <div className="flex-1 min-w-[300px]">
             <h5 className="text-lg text-teal-500 mb-2">1A. Posture</h5>
             <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 const parsedValue = Number(event.target.value); // Ambil value dari target
                 console.log("Parsed value (number):", parsedValue); // Debugging
                 setneckPostureValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
               }}
               orientation="vertical"
               style={{ gap: "10px" }}
             >
               <Radio value="0" checked={neckPostureValue === 0}>
                 <div className="flex flex-col items-center">
                   <Image
                     src="/11.jpg"
                     alt="Neutral Position"
                     width={300}
                     height={100}
                     className="rounded-lg"
                   />
                   <span className="text-center max-w-[300px]">
                     is in a neutral position with a slight forward bend
                   </span>
                 </div>
               </Radio>
               <Radio value="1" checked={neckPostureValue === 1}>
                 <div className="flex flex-col items-center">
                   <Image
                     src="/12.jpg"
                     alt="Bent Position"
                     width={300}
                     height={100}
                     className="mr-2 rounded-lg"
                   />
                   <span className="text-center max-w-[300px]">
                     Neck is moderately bent forward
                   </span>
                 </div>
               </Radio>
               <Radio value="2" checked={neckPostureValue === 2}>
                 <div className="flex flex-col items-center">
                   <Image
                     src="/13.jpg"
                     alt="Twisted Position"
                     width={300}
                     height={100}
                     className="mr-2 rounded-lg"
                   />
                   <span className="text-center max-w-[300px]">
                     Neck is extremely bent forward
                   </span>
                 </div>
               </Radio>
             </RadioGroup>
           </div>
     
           {/* Kolom 1B: Repetition */}
           <div className="flex-1 min-w-[300px]">
             <h5 className="text-lg text-teal-500 mb-2">1B. Repetition</h5>
             <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 const parsedValue = Number(event.target.value); // Ambil value dari target
                 console.log("Parsed value (number):", parsedValue); // Debugging
                 setneckRepetitionValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
               }}
               orientation="vertical"
               style={{
                 justifyContent: "space-around",
               }}
             >
               <Radio value="0" checked={neckRepetitionValue === 1} color="primary">
                 Movements with occasional pauses
               </Radio>
               <Radio value="1" checked={neckRepetitionValue === 2} color="secondary">
                 Movements with frequent pauses
               </Radio>
               <Radio value="2" checked={neckRepetitionValue === 3} color="success">
                 Movement with no rest
               </Radio>
             </RadioGroup>
           </div>
         </div>
     
         <Spacer y={2} />
         <h5 className="text-lg text-teal-500 mb-2">Muskuloskelatal Discomfoty Level (MDL)</h5>
         <RadioGroup
           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
             const parsedValue = Number(event.target.value); // Ambil value dari target
             console.log("Parsed value (number):", parsedValue); // Debugging
             setNeckmdlValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
           }}
           orientation="vertical"
           style={{
             justifyContent: "space-around",
           }}
         >
           <Radio value="0" className="text-blue-500" style={{ borderColor: "#3b82f6" }}>
             <span className="text-blue-500">😄 No Pain</span>
           </Radio>
           <Radio value="1" className="text-green-500" style={{ borderColor: "#10b981" }}>
             <span className="text-green-500">🙂 Mild Pain</span>
           </Radio>
           <Radio value="2" className="text-yellow-500" style={{ borderColor: "#f59e0b" }}>
             <span className="text-yellow-500">😐 Moderate Pain</span>
           </Radio>
           <Radio value="3" className="text-orange-500" style={{ borderColor: "#f97316" }}>
             <span className="text-orange-500">😟 Significant Pain</span>
           </Radio>
           <Radio value="4" className="text-red-500" style={{ borderColor: "#ef4444" }}>
             <span className="text-red-500">😡 Severe Pain</span>
           </Radio>
         </RadioGroup>
       </CardBody>
     
       <Divider />
       <CardFooter className="bg-teal-500 text-white rounded-b-lg">
         <div className="flex justify-between w-full">
           <button
             className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
             onClick={handleNext}
           >
             Next
           </button>
         </div>
       </CardFooter>
     </Card>
     
      )}

      {/* Card 2: Back */}
      {currentCard === 2 && (
       <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
       <CardHeader className="bg-purple-500 text-white rounded-t-lg flex flex-col items-center">
         <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
         <h4 className="text-md">Body Part: Back</h4>
       </CardHeader>
       <Divider />
     
       <CardBody className="bg-white">
         <div className="flex flex-wrap justify-between gap-4">
           {/* Kolom 2A: Posture */}
           <div className="flex-1 min-w-[300px]">
             <h5 className="text-lg text-purple-500 mb-2">2A. Posture</h5>
             <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 const parsedValue = Number(event.target.value);
                 console.log("Parsed value (number):", parsedValue);
                 setbackPostureValue(isNaN(parsedValue) ? 0 : parsedValue);
               }}
               orientation="vertical"
               style={{ gap: "10px" }}
             >
               <Radio value="0">
                 <div className="flex flex-col items-center">
                   <Image
                     src="/21.jpg"
                     alt="Neutral Back"
                     width={300}
                     height={100}
                     className="mr-2 rounded-lg"
                   />
                   <span className="text-center max-w-[300px]">Back is in a neutral position</span>
                 </div>
               </Radio>
               <Radio value="1">
                 <div className="flex flex-col items-center">
                   <Image
                     src="22.jpg"
                     alt="Bent Back"
                     width={300}
                     height={100}
                     className="mr-2 rounded-lg"
                   />
                   <span className="text-center max-w-[300px]">Back is moderate bent up</span>
                 </div>
               </Radio>
               <Radio value="2">
                 <div className="flex flex-col items-center">
                   <Image
                     src="/23.jpg"
                     alt="Twisted Back"
                     width={300}
                     height={100}
                     className="mr-2 rounded-lg"
                   />
                   <span className="text-center max-w-[300px]">Back is extreme bent up</span>
                 </div>
               </Radio>
             </RadioGroup>
           </div>
     
           {/* Kolom 2B: Repetition */}
           <div className="flex-1 min-w-[300px]">
             <h5 className="text-lg text-purple-500 mb-2">2B. Repetition</h5>
             <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 const parsedValue = Number(event.target.value);
                 console.log("Parsed value (number):", parsedValue);
                 setBackRepetitionValue(isNaN(parsedValue) ? 0 : parsedValue);
               }}
               orientation="vertical"
               style={{ justifyContent: "space-around" }}
             >
               <Radio value="0" color="primary">0 – 5 repetitions per minute</Radio>
               <Radio value="1" color="secondary">6 – 10 repetitions per minute</Radio>
               <Radio value="2" color="success">More than 10 repetitions per minute</Radio>
             </RadioGroup>
           </div>
         </div>
     
         <Spacer y={2} />
     
         {/* MDL Section */}
         <h5 className="text-lg text-purple-500 mb-2">Muskuloskelatal Discomfoty Level (MDL)</h5>
         <RadioGroup
           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
             const parsedValue = Number(event.target.value);
             console.log("Parsed value (number):", parsedValue);
             setBackmdlValue(isNaN(parsedValue) ? 0 : parsedValue);
           }}
           orientation="vertical"
           style={{ justifyContent: "space-around" }}
         >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
             <span className="text-blue-500">😄 No Pain</span>
           </Radio>
           <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
             <span className="text-green-500">🙂 Mild Pain</span>
           </Radio>
           <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
             <span className="text-yellow-500">😐 Moderate Pain</span>
           </Radio>
           <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
             <span className="text-orange-500">😟 Significant Pain</span>
           </Radio>
           <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
             <span className="text-red-500">😡 Severe Pain</span>
           </Radio>
         </RadioGroup>
       </CardBody>
       <Divider />
       <CardFooter className="bg-purple-500 text-white rounded-b-lg">
         <div className="flex justify-between w-full">
           <button
             className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
             onClick={handlePrevious}
           >
             Previous
           </button>
           <button
             className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
             onClick={handleNext}
           >
             Next
           </button>
         </div>
       </CardFooter>
     </Card>
     
      )}

      {/* Card 3: Shoulder */}
      {currentCard === 3 && (
       <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
       <CardHeader className="bg-green-500 text-white rounded-t-lg flex flex-col items-center">
         <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
         <h4 className="text-md">Body Part: Shoulder</h4>
       </CardHeader>
       <Divider />
       <CardBody className="bg-white">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
             <h5 className="text-lg text-green-500 mb-2">3A. Posture</h5>
             <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 const parsedValue = Number(event.target.value);
                 console.log("Parsed value (number):", parsedValue);
                 setShoulderPostureValue(isNaN(parsedValue) ? 0 : parsedValue);
               }}
               orientation="vertical"
               style={{ gap: "10px" }}
             >
               <Radio value="0">
                 <div className="flex flex-col items-center">
                   <Image
                     src="/31.jpg"
                     alt="Neutral Shoulder"
                     width={300}
                     height={100}
                     className="mr-2 rounded-lg"
                   />
                   <span className="text-center max-w-[300px]">Shoulder is in a neutral position.</span>
                 </div>
               </Radio>
               <Radio value="2">
                 <div className="flex flex-col items-center">
                   <Image
                     src="/32.jpg"
                     alt="Raised Shoulder"
                     width={300}
                     height={100}
                     className="mr-2 rounded-lg"
                   />
                   <span className="text-center max-w-[300px]">Shoulder is moderate bent up.</span>
                 </div>
               </Radio>
               <Radio value="4">
                 <div className="flex flex-col items-center">
                   <Image
                     src="/33.jpg"
                     alt="Twisted Shoulder"
                     width={300}
                     height={100}
                     className="mr-2 rounded-lg"
                   />
                   <span className="text-center max-w-[300px]">Shoulder is extreme bent up.</span>
                 </div>
               </Radio>
             </RadioGroup>
           </div>
     
           <div>
             <h5 className="text-lg text-green-500 mb-2">3B. Repetition</h5>
             <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 const parsedValue = Number(event.target.value);
                 console.log("Parsed value (number):", parsedValue);
                 setShoulderRepetitionValue(isNaN(parsedValue) ? 0 : parsedValue);
               }}
               orientation="vertical"
               style={{ justifyContent: "space-around" }}
             >
               <Radio value="0" color="primary">Movements with occasional pauses</Radio>
               <Radio value="1" color="secondary">Movement with more pauses</Radio>
               <Radio value="2" color="success">Continuous movement with no rest</Radio>
             </RadioGroup>
           </div>
           </div>
     
           <h5 className="text-lg text-green-500 mb-2">Muskuloskeletal Discomfort Level (MDL)</h5>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h6 className="text-lg text-green-500 mb-2">Left</h6>
        <RadioGroup
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const parsedValue = Number(event.target.value);
            console.log("Parsed value (number):", parsedValue);
            setShouldermdlLeftValue(isNaN(parsedValue) ? 0 : parsedValue);
          }}
          orientation="vertical"
          style={{ justifyContent: "space-around" }}
        >
          <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
            <span className="text-blue-500">😄 No Pain</span>
          </Radio>
          <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
            <span className="text-green-500">🙂 Mild Pain</span>
          </Radio>
          <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
            <span className="text-yellow-500">😐 Moderate Pain</span>
          </Radio>
          <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
            <span className="text-orange-500">😟 Significant Pain</span>
          </Radio>
          <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
            <span className="text-red-500">😡 Severe Pain</span>
          </Radio>
        </RadioGroup>
      </div>
      <div>
        <h6 className="text-lg text-green-500 mb-2">Right</h6>
        <RadioGroup
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const parsedValue = Number(event.target.value);
            console.log("Parsed value (number):", parsedValue);
            setShouldermdlRightValue(isNaN(parsedValue) ? 0 : parsedValue);
          }}
          orientation="vertical"
          style={{ justifyContent: "space-around" }}
        >
          <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
            <span className="text-blue-500">😄 No Pain</span>
          </Radio>
          <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
            <span className="text-green-500">🙂 Mild Pain</span>
          </Radio>
          <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
            <span className="text-yellow-500">😐 Moderate Pain</span>
          </Radio>
          <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
            <span className="text-orange-500">😟 Significant Pain</span>
          </Radio>
          <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
            <span className="text-red-500">😡 Severe Pain</span>
          </Radio>
        </RadioGroup>
      </div>
      </div>
       </CardBody>
       <Divider />
       <CardFooter className="bg-green-500 text-white rounded-b-lg">
         <div className="flex justify-between w-full">
           <button
             className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
             onClick={handlePrevious}
           >
             Previous
           </button>
           <button
             className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
             onClick={handleNext}
           >
             Next
           </button>
         </div>
       </CardFooter>
     </Card>
     
      )}

         

         {/* Card 5: lower arm */}
         {currentCard === 4 && (
        <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
          <CardHeader className="bg-red-500 text-white rounded-t-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
            <h4 className="text-md">Body Part: Lower Arm</h4>
          </CardHeader>
          <Divider />
          <CardBody className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-lg text-red-500 mb-2">4A. Posture</h5>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setLowerArmPostureValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{ gap: "10px" }}
            >
              <Radio value="0">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/41.jpg"
                    alt="Neutral Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Lower Arm is in a neutral position
                  </span>
                </div>
              </Radio>
              <Radio value="2">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/42.jpg"
                    alt="Raised Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Lower Arm is moderately bent up

                  .</span>
                </div>
              </Radio>
              <Radio value="4">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/43.jpg"
                    alt="Twisted Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Lower arm is positioned across the midline or extended to the side of the body
                  </span>
                </div>
              </Radio>
            </RadioGroup>

             </div>
     
           <div>
            <h5 className="text-lg text-red-500 mb-2">4B. Repetition</h5>
            <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedValue = Number(event.target.value); // Ambil value dari target
                console.log("Parsed value (number):", parsedValue); // Debugging
                setLowerArmRepetitionValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
              }}
              
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
              <Radio value="0" color="primary">Movements with occasional pause</Radio>
              <Radio value="1" color="secondary">Movements with frequent pauses</Radio>
              <Radio value="2" color="success">Continuous movement with no rest</Radio>
            </RadioGroup>
            </div>
            </div>

            <h5 className="text-lg text-red-500 mb-2">Muskuloskelatal Discomfoty Level (MDL)</h5>
            <div className="grid grid-cols-2 gap-4">
            <div>
            <h6 className="text-lg text-red-500 mb-2">Left</h6>
           
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setLowerArmmdlLeftValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
    <span className="text-blue-500">😄 No Pain</span>
  </Radio>
  <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
    <span className="text-green-500">🙂 Mild Pain</span>
  </Radio>
  <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
    <span className="text-yellow-500">😐 Moderate Pain</span>
  </Radio>
  <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
    <span className="text-orange-500">😟 Significant Pain</span>
  </Radio>
  <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
    <span className="text-red-500">😡 Severe Pain</span>
  </Radio>
            </RadioGroup>
            </div>
            <div>
            <h6 className="text-lg text-red-500 mb-2">Right</h6>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setLowerArmmdlRightValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
    <span className="text-blue-500">😄 No Pain</span>
  </Radio>
  <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
    <span className="text-green-500">🙂 Mild Pain</span>
  </Radio>
  <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
    <span className="text-yellow-500">😐 Moderate Pain</span>
  </Radio>
  <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
    <span className="text-orange-500">😟 Significant Pain</span>
  </Radio>
  <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
    <span className="text-red-500">😡 Severe Pain</span>
  </Radio>
            </RadioGroup>
            </div>
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="bg-red-500 text-white rounded-b-lg">
            <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>
          </CardFooter>
        </Card>
      )}

         {/* Card 5: Wirst */}
         {currentCard === 5 && (
        <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
          <CardHeader className="bg-amber-500 text-white rounded-t-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
            <h4 className="text-md">Body Part: Wirst</h4>
          </CardHeader>
          <Divider />
          <CardBody className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-lg text-amber-500 mb-2">5A. Posture</h5>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setWristPostureValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}

              orientation="vertical"
              style={{ gap: "10px" }}
            >
              <Radio value="0">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/51.jpg"
                    alt="Neutral Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Wrist are in a neutral position
                  </span>
                </div>
              </Radio>
              <Radio value="2">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/52.jpg"
                    alt="Raised Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Wrists are moderately bent upward or downward


                  .</span>
                </div>
              </Radio>
              <Radio value="4">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/53.jpg"
                    alt="Twisted Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Wrists are extremely bent upward or downward with twisting
                  </span>
                </div>
              </Radio>
            </RadioGroup>
           </div>
           <div>
            <h5 className="text-lg text-amber-500 mb-2">5B. Repetition</h5>
            <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedValue = Number(event.target.value); // Ambil value dari target
                console.log("Parsed value (number):", parsedValue); // Debugging
                setWristRepetitionValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
              }}
              
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
              <Radio value="0" color="primary">0 – 10 repetitions per minute</Radio>
              <Radio value="1" color="secondary">11 – 20 repetitions per minute</Radio>
              <Radio value="2" color="success">More than 20 repetitions per minute</Radio>
            </RadioGroup>
            </div>
            </div>

            <h5 className="text-lg text-amber-500 mb-2">Muskuloskelatal Discomfoty Level (MDL)</h5>
            <div className="grid grid-cols-2 gap-4">
            <div>
            <h6 className="text-lg text-amber-500 mb-2">Left</h6>
           
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setWristmdlLeftValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
    <span className="text-blue-500">😄 No Pain</span>
  </Radio>
  <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
    <span className="text-green-500">🙂 Mild Pain</span>
  </Radio>
  <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
    <span className="text-yellow-500">😐 Moderate Pain</span>
  </Radio>
  <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
    <span className="text-orange-500">😟 Significant Pain</span>
  </Radio>
  <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
    <span className="text-red-500">😡 Severe Pain</span>
  </Radio>
            </RadioGroup>
            </div>
            <div>
            <h6 className="text-lg text-amber-500 mb-2">Right</h6>
           
           <RadioGroup
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setWristmdlRightValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
             orientation="vertical"
             style={{
               justifyContent: "space-around",
             }}
           >
          <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
   <span className="text-blue-500">😄 No Pain</span>
 </Radio>
 <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
   <span className="text-green-500">🙂 Mild Pain</span>
 </Radio>
 <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
   <span className="text-yellow-500">😐 Moderate Pain</span>
 </Radio>
 <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
   <span className="text-orange-500">😟 Significant Pain</span>
 </Radio>
 <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
   <span className="text-red-500">😡 Severe Pain</span>
 </Radio>
           </RadioGroup>
           </div>
           </div>
          </CardBody>
          <Divider />
          <CardFooter className="bg-amber-500 text-white rounded-b-lg">
            <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>
          </CardFooter>
        </Card>
      )}

 {/* Card 6: Knee */}
 {currentCard === 6 && (
        <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
          <CardHeader className="bg-fuchsia-500 text-white rounded-t-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
            <h4 className="text-md">Body Part: Knee</h4>
          </CardHeader>
          <Divider />
          <CardBody className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-lg text-fuchsia-500 mb-2">6A. Posture</h5>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setKneePostureValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}

              orientation="vertical"
              style={{ gap: "10px" }}
            >
              <Radio value="0">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/61.jpg"
                    alt="Neutral Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Knee is in a neutral position
                  </span>
                </div>
              </Radio>
              <Radio value="2">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/62.jpg"
                    alt="Raised Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Knee is in squatting position</span>
                </div>
              </Radio>
              <Radio value="4">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/63.jpg"
                    alt="Twisted Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Knee is in kneeling  position
                  </span>
                </div>
              </Radio>
            </RadioGroup>
            </div>
            <div>
            <h5 className="text-lg text-fuchsia-500 mb-2">6B. Repetition</h5>
            <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedValue = Number(event.target.value); // Ambil value dari target
                console.log("Parsed value (number):", parsedValue); // Debugging
                setKneeRepetitionValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
              }}
              
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
              <Radio value="0" color="primary">0 – 10 repetitions per minute</Radio>
              <Radio value="1" color="secondary">11 – 20 repetitions per minute</Radio>
              <Radio value="2" color="success">More than 20 repetitions per minute</Radio>
            </RadioGroup>
              </div>
              </div>
            <h5 className="text-lg text-fuchsia-500 mb-2">Muskuloskelatal Discomfoty Level (MDL)</h5>
            <div className="grid grid-cols-2 gap-4">
            <div>
            <h6 className="text-lg text-fuchsia-500 mb-2">Left</h6>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setKneemdlLeftValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
    <span className="text-blue-500">😄 No Pain</span>
  </Radio>
  <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
    <span className="text-green-500">🙂 Mild Pain</span>
  </Radio>
  <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
    <span className="text-yellow-500">😐 Moderate Pain</span>
  </Radio>
  <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
    <span className="text-orange-500">😟 Significant Pain</span>
  </Radio>
  <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
    <span className="text-red-500">😡 Severe Pain</span>
  </Radio>
            </RadioGroup>
            </div>
            <div>
            <h6 className="text-lg text-fuchsia-500 mb-2">Right</h6>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setKneemdlRightValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
    <span className="text-blue-500">😄 No Pain</span>
  </Radio>
  <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
    <span className="text-green-500">🙂 Mild Pain</span>
  </Radio>
  <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
    <span className="text-yellow-500">😐 Moderate Pain</span>
  </Radio>
  <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
    <span className="text-orange-500">😟 Significant Pain</span>
  </Radio>
  <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
    <span className="text-red-500">😡 Severe Pain</span>
  </Radio>
            </RadioGroup>
            </div>
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="bg-fuchsia-500 text-white rounded-b-lg">
            <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>
          </CardFooter>
        </Card>
      )}

{/* Card 7: Leg */}
{currentCard === 7 && (
        <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
          <CardHeader className="bg-rose-500 text-white rounded-t-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
            <h4 className="text-md">Body Part: Leg</h4>
          </CardHeader>
          <Divider />
          <CardBody className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-lg text-rose-500 mb-2">7A. Posture</h5>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setLegPostureValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}

              orientation="vertical"
              style={{ gap: "10px" }}
            >
              <Radio value="0">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/71.jpg"
                    alt="Neutral Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Leg are  in a neutral position
                  </span>
                </div>
              </Radio>
              <Radio value="2">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/72.jpg"
                    alt="Raised Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Leg are moderately bent forward
                  </span>
                </div>
              </Radio>
              <Radio value="4">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/73.jpg"
                    alt="Twisted Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Leg are extremely bent forward
                  </span>
                </div>
              </Radio>
            </RadioGroup>
            </div>
            <div>
            <h5 className="text-lg text-rose-500 mb-2">7B. Repetition</h5>
            <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedValue = Number(event.target.value); // Ambil value dari target
                console.log("Parsed value (number):", parsedValue); // Debugging
                setLegRepetitionValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
              }}
              
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
              <Radio value="0" color="primary">0 – 10 repetitions per minute</Radio>
              <Radio value="1" color="secondary">11 – 20 repetitions per minute</Radio>
              <Radio value="2" color="success">More than 20 repetitions per minute</Radio>
            </RadioGroup>
              </div>
              </div>
            <h5 className="text-lg text-rose-500 mb-2">Muskuloskelatal Discomfoty Level (MDL)</h5>
            <div className="grid grid-cols-2 gap-4">
            <div>
            <h6 className="text-lg text-rose-500 mb-2">Left</h6>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setLegmdlLeftValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
    <span className="text-blue-500">😄 No Pain</span>
  </Radio>
  <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
    <span className="text-green-500">🙂 Mild Pain</span>
  </Radio>
  <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
    <span className="text-yellow-500">😐 Moderate Pain</span>
  </Radio>
  <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
    <span className="text-orange-500">😟 Significant Pain</span>
  </Radio>
  <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
    <span className="text-red-500">😡 Severe Pain</span>
  </Radio>
            </RadioGroup>
            </div>
            <div>

            <h6 className="text-lg text-rose-500 mb-2">Right</h6>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setLegmdlRightValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
    <span className="text-blue-500">😄 No Pain</span>
  </Radio>
  <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
    <span className="text-green-500">🙂 Mild Pain</span>
  </Radio>
  <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
    <span className="text-yellow-500">😐 Moderate Pain</span>
  </Radio>
  <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
    <span className="text-orange-500">😟 Significant Pain</span>
  </Radio>
  <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
    <span className="text-red-500">😡 Severe Pain</span>
  </Radio>
            </RadioGroup>
            </div>
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="bg-rose-500 text-white rounded-b-lg">
            <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>
          </CardFooter>
        </Card>
      )}


{/* Card 8: Hand Grip */}
{currentCard === 8 && (
        <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
          <CardHeader className="bg-indigo-500 text-white rounded-t-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
            <h4 className="text-md">Body Part: Hands Grip</h4>
          </CardHeader>
          <Divider />
          <CardBody className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-lg text-indigo-500 mb-2">Posture</h5>
            <RadioGroup
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedValue = Number(event.target.value); // Ambil value dari target
                console.log("Parsed value (number):", parsedValue); // Debugging
                setHandGripsPostureValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
              }}
              orientation="vertical"
              style={{ gap: "10px" }}
            >
              <Radio value="0">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/81.jpg"
                    alt="Neutral Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Power grip for pulling or comfortable full-hand contact for pushing
                  </span>
                </div>
              </Radio>
              <Radio value="2">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/82.jpg"
                    alt="Raised Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">Partial grip, eg. Finger clamped at 90 degress, or partial hand contact for pushing
                  </span>
                </div>
              </Radio>
              <Radio value="4">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/83.jpg"
                    alt="Twisted Shoulder"
                    width={300}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">No handles or the hand contact is uncomfortable
                  </span>
                </div>
              </Radio>
            </RadioGroup>
            </div>
            <div>
            <h5 className="text-lg text-indigo-500 mb-2">Muskuloskelatal Discomfoty Level (MDL)</h5>
            <h6 className="text-lg text-indigo-500 mb-2">Left</h6>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setHandGripsmdlLeftValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
    <span className="text-blue-500">😄 No Pain</span>
  </Radio>
  <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
    <span className="text-green-500">🙂 Mild Pain</span>
  </Radio>
  <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
    <span className="text-yellow-500">😐 Moderate Pain</span>
  </Radio>
  <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
    <span className="text-orange-500">😟 Significant Pain</span>
  </Radio>
  <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
    <span className="text-red-500">😡 Severe Pain</span>
  </Radio>
            </RadioGroup>

            <h6 className="text-lg text-indigo-500 mb-2">Right</h6>
            <RadioGroup
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setHandGripsmdlRightValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{
                justifyContent: "space-around",
              }}
            >
           <Radio value="0" className="text-blue-500" style={{ borderColor: '#3b82f6' }}>
    <span className="text-blue-500">😄 No Pain</span>
  </Radio>
  <Radio value="1" className="text-green-500" style={{ borderColor: '#10b981' }}>
    <span className="text-green-500">🙂 Mild Pain</span>
  </Radio>
  <Radio value="2" className="text-yellow-500" style={{ borderColor: '#f59e0b' }}>
    <span className="text-yellow-500">😐 Moderate Pain</span>
  </Radio>
  <Radio value="3" className="text-orange-500" style={{ borderColor: '#f97316' }}>
    <span className="text-orange-500">😟 Significant Pain</span>
  </Radio>
  <Radio value="4" className="text-red-500" style={{ borderColor: '#ef4444' }}>
    <span className="text-red-500">😡 Severe Pain</span>
  </Radio>
            </RadioGroup>
          </div>
          </div>
           
          </CardBody>
          <Divider />
          <CardFooter className="bg-indigo-500 text-white rounded-b-lg">
            <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>
          </CardFooter>
        </Card>
      )}

      
{/* Card 9: Hand Grip */}
{currentCard === 9 && (
        <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
          <CardHeader className="bg-emerald-500 text-white rounded-t-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
            <h4 className="text-md">Body Part: Task Duration</h4>
          </CardHeader>
          <Divider />
          <CardBody className="bg-white">
            <h5 className="text-lg text-emerald-500 mb-2">Task Duration</h5>
            <RadioGroup
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const parsedValue = Number(event.target.value); // Ambil value dari target
              console.log("Parsed value (number):", parsedValue); // Debugging
              setTaskDurationValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
            }}
              orientation="vertical"
              style={{ gap: "10px" }}
            >
              <Radio value="0">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/91.jpeg"
                    alt="Neutral Shoulder"
                    width={100}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]"> Less than 2 hours / day

                  </span>
                </div>
              </Radio>
              <Radio value="1">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/92.jpeg"
                    alt="Raised Shoulder"
                    width={100}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">2 until 4 hours / day

                  </span>
                </div>
              </Radio>
              <Radio value="2">
                 <div className="flex flex-col items-center">
                  <Image
                    src="/93.jpeg"
                    alt="Twisted Shoulder"
                    width={100}
                    height={100}
                    className="mr-2 rounded-lg"
                  />
                <span className="text-center max-w-[300px]">More than 4 hours / day
                  </span>
                </div>
              </Radio>
            </RadioGroup>
            <Spacer y={2} />
           
          </CardBody>
          <Divider />
          <CardFooter className="bg-emerald-500 text-white rounded-b-lg">
            <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>
          </CardFooter>
        </Card>
      )}

           
      {/* Card 11: Load */}
{currentCard === 10 && (
           <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
           <CardHeader className="bg-gray-500 text-white rounded-t-lg flex flex-col items-center">
             <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
             <h4 className="text-md">Body Part: Load</h4>
           </CardHeader>
           <Divider />
           <CardBody className="bg-white">
             <h5 className="text-lg text-gray-500 mb-4">Select Gender</h5>
             <RadioGroup
               onChange={handleGenderChange}
               orientation="horizontal"
               value={gender} // Bind to state
               style={{ gap: "10px" }}
             >
               <Radio value="male">Male</Radio>
               <Radio value="female">Female</Radio>
             </RadioGroup>
     
             <Spacer y={2} />
     
             <h5 className="text-lg text-gray-500 mb-2">Load</h5>
             <RadioGroup
               onChange={(event) => {
                 const parsedValue = Number(event.target.value);
                 setLoadValue(isNaN(parsedValue) ? 0 : parsedValue);
               }}
               orientation="vertical"
               style={{ gap: "10px" }}
             >
               {gender === "male" ? (
                 <>
                   <Radio value="0">
                     <div className="flex flex-col items-center">
                       <Image
                         src="/10_load male1.jpeg"
                         alt="Male 0-5 Kg"
                         width={100}
                         height={100}
                         className="mr-2 rounded-lg"
                       />
                       <span>0-5 Kg</span>
                     </div>
                   </Radio>
                   <Radio value="1">
                     <div className="flex flex-col items-center">
                       <Image
                         src="/10_load male2.jpeg"
                         alt="Male 5-15 Kg"
                         width={100}
                         height={100}
                         className="mr-2 rounded-lg"
                       />
                       <span>5-15 Kg</span>
                     </div>
                   </Radio>
                   <Radio value="2">
                     <div className="flex flex-col items-center">
                       <Image
                         src="/10_load male3.jpeg"
                         alt=">15 Kg"
                         width={100}
                         height={100}
                         className="mr-2 rounded-lg"
                       />
                       <span>more than 15 Kg</span>
                     </div>
                   </Radio>
                 </>
               ) : (
                 <>
                   <Radio value="0">
                     <div className="flex flex-col items-center">
                       <Image
                         src="/10_load female1.jpeg"
                         alt="Female 0-3 Kg"
                         width={100}
                         height={100}
                         className="mr-2 rounded-lg"
                       />
                       <span>0-3 Kg</span>
                     </div>
                   </Radio>
                   <Radio value="1">
                     <div className="flex flex-col items-center">
                       <Image
                         src="/10_load female2.jpeg"
                         alt="Female 3-10 Kg"
                         width={100}
                         height={100}
                         className="mr-2 rounded-lg"
                       />
                       <span>3-10 Kg</span>
                     </div>
                   </Radio>
                   <Radio value="2">
                     <div className="flex flex-col items-center">
                       <Image
                         src="/10_load female3.jpeg"
                         alt=">10 Kg"
                         width={100}
                         height={100}
                         className="mr-2 rounded-lg"
                       />
                       <span>more than 10 Kg</span>
                     </div>
                   </Radio>
                 </>
               )}
             </RadioGroup>
             <Spacer y={2} />
           </CardBody>
           <Divider />
           <CardFooter className="bg-gray-500 text-white rounded-b-lg">
           <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>
           </CardFooter>
         </Card>
      )}

       {/* Card 11: Hand Grip */}
{currentCard === 11 && (
        <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
          <CardHeader className="bg-lime-500 text-white rounded-t-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
            <h4 className="text-md">Body Part: Job Demand</h4>
          </CardHeader>
          <Divider />
          <CardBody className="bg-white">
            <h5 className="text-lg text-lime-500 mb-2">intensity and impact on workers</h5>
            <RadioGroup
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedValue = Number(event.target.value); // Ambil value dari target
                console.log("Parsed value (number):", parsedValue); // Debugging
                setJobDemandValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
              }}

              orientation="vertical"
              style={{ gap: "10px" }}
            >
              <Radio value="0">
                 <div className="flex flex-col items-center">
                  <span>Minimal physical, mental, or emotional effort needed
                  </span>
                </div>
              </Radio>
              <Radio value="1">
                 <div className="flex flex-col items-center">
                  <span>Manageable levels of physical, mental, or emotional effort required

                  </span>
                </div>
              </Radio>
              <Radio value="2">
                 <div className="flex flex-col items-center">
                  <span>Significant physical, mental, or emotional effort required
                  </span>
                </div>
              </Radio>
            </RadioGroup>
            <Spacer y={2} />
           
          </CardBody>
          <Divider />
          <CardFooter className="bg-lime-500 text-white rounded-b-lg">
            <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>
          </CardFooter>
        </Card>
      )}

       {/* Card 13: Hand Grip */}
{currentCard === 12 && (
        <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
          <CardHeader className="bg-pink-500 text-white rounded-t-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
            <h4 className="text-md">Body Part: Job Satisfaction</h4>
          </CardHeader>
          <Divider />
          <CardBody className="bg-white">
            <h5 className="text-lg text-pink-500 mb-2">experience and feelings of workers regarding their work</h5>
            <RadioGroup
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedValue = Number(event.target.value); // Ambil value dari target
                console.log("Parsed value (number):", parsedValue); // Debugging
                setJobSatisfactionValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
              }}

              orientation="vertical"
              style={{ gap: "10px" }}
            >
              <Radio value="0">
                 <div className="flex flex-col items-center">
                  <span>Strong sense of fulfillment and value in work
                  </span>
                </div>
              </Radio>
              <Radio value="1">
                 <div className="flex flex-col items-center">
                  <span>General contentment with job duties but some areas for improvement

                  </span>
                </div>
              </Radio>
              <Radio value="2">
                 <div className="flex flex-col items-center">
                  <span>Feelings of frustration or dissatisfaction with work
                  </span>
                </div>
              </Radio>
            </RadioGroup>
            <Spacer y={2} />
           
          </CardBody>
          <Divider />
          <CardFooter className="bg-pink-500 text-white rounded-b-lg">
            <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>
          </CardFooter>
        </Card>
      )}

       {/* Card 16: Hand Grip */}
{currentCard === 13 && (
        <Card className="max-w-[800px] w-full shadow-xl rounded-lg">
          <CardHeader className="bg-orange-500 text-white rounded-t-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Ergonomic Risk Assessment</h3>
            <h4 className="text-md">Body Part: Social Support</h4>
          </CardHeader>
          <Divider />
          <CardBody className="bg-white">
            <h5 className="text-lg text-orange-500 mb-2">type and effectiveness of support available to workers</h5>
            <RadioGroup
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedValue = Number(event.target.value); // Ambil value dari target
                console.log("Parsed value (number):", parsedValue); // Debugging
                setSocialSupportValue(isNaN(parsedValue) ? 0 : parsedValue); // Pastikan parsedValue bukan NaN
              }}

              orientation="vertical"
              style={{ gap: "10px" }}
            >
              <Radio value="0">
                 <div className="flex flex-col items-center">
                  <span>strong support from supervisors and colleagues, open communication channels, access to training and resources, and mentorship programs and teamwork being encouraged.
                  </span>
                </div>
              </Radio>
              <Radio value="1">
                 <div className="flex flex-col items-center">
                  <span>Some support is available from supervisors and peers, with occasional communication and feedback, but there is limited access to training resources.

                  </span>
                </div>
              </Radio>
              <Radio value="2">
                 <div className="flex flex-col items-center">
                  <span>There is minimal or no support from supervisors and colleagues, accompanied by poor communication and feedback, as well as a lack of training and resources.
                  </span>
                </div>
              </Radio>
            </RadioGroup>
            <Spacer y={2} />
           
          </CardBody>
          <Divider />
          <CardFooter className="bg-orange-500 text-white rounded-b-lg">
            <div className="flex justify-between w-full">
              <button
      className="w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded"
      onClick={handlePrevious}
    >
      Previous
    </button>
                <button
      className="w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
      onClick={handleNext}
    >
      Next
    </button>
            </div>

            
          </CardFooter>
        </Card>
      )}
      {/* Tambahkan semua Card sesuai permintaan */}
      {/* Pastikan mengganti warna di setiap Card */}

      {/* Card 10 hingga 14: Tanpa Repetition */}
      {/* Gunakan CardBody berbeda di sini */}
      <div className="w-full max-w-[800px] p-4 mt-4 bg-white shadow-lg rounded-lg">
      <Table isStriped aria-label="Posture and Task Analysis Scores">
  <TableHeader>
    <TableColumn>Body Part</TableColumn>
    <TableColumn>BP Score</TableColumn>
    <TableColumn>MDL Score</TableColumn>
    <TableColumn>Total Score</TableColumn>
  </TableHeader>
  <TableBody>
    {/* Neck Scores */}
    <TableRow key="neck">
      <TableCell>Neck</TableCell>
      <TableCell>{neckBPscore}</TableCell>
      <TableCell>{neckmdlValue}</TableCell>
      <TableCell>{necktotalscore}</TableCell>
    </TableRow>

    {/* Back Scores */}
    <TableRow key="back">
      <TableCell>Back</TableCell>
      <TableCell>{backBPscore}</TableCell>
      <TableCell>{backmdlValue}</TableCell>
      <TableCell>{backtotalscore}</TableCell>
    </TableRow>

    {/* Shoulder Scores */}
    <TableRow key="shoulder">
      <TableCell>Shoulder</TableCell>
      <TableCell>{shoulderBPscore}</TableCell>
      <TableCell>{shouldermdlLeftValue + shouldermdlRightValue}</TableCell>
      <TableCell>{shouldertotalscore}</TableCell>
    </TableRow>

    {/* Lower Arm Scores */}
    <TableRow key="lower-arm">
      <TableCell>Lower Arm</TableCell>
      <TableCell>{lowerArmBPscore}</TableCell>
      <TableCell>{lowerArmmdlLeftValue + lowerArmmdlRightValue}</TableCell>
      <TableCell>{lowerArmtotalscore}</TableCell>
    </TableRow>

    {/* Wrist Scores */}
    <TableRow key="wrist">
      <TableCell>Wrist</TableCell>
      <TableCell>{wristBPscore}</TableCell>
      <TableCell>{wristmdlLeftValue + wristmdlRightValue}</TableCell>
      <TableCell>{wristhandtotalscore}</TableCell>
    </TableRow>

    {/* Knee Scores */}
    <TableRow key="knee">
      <TableCell>Knee</TableCell>
      <TableCell>{kneeBPscore}</TableCell>
      <TableCell>{kneemdlLeftValue + kneemdlRightValue}</TableCell>
      <TableCell>{kneetotalscore}</TableCell>
    </TableRow>

    {/* Leg Scores */}
    <TableRow key="leg">
      <TableCell>Leg</TableCell>
      <TableCell>{legBPscore}</TableCell>
      <TableCell>{legmdlLeftValue + legmdlRightValue}</TableCell>
      <TableCell>{legtotalscore}</TableCell>
    </TableRow>

    {/* Hand Grips Scores */}
    <TableRow key="hand-grips">
      <TableCell>Hand Grips</TableCell>
      <TableCell>{handGripsBPscore}</TableCell>
      <TableCell>{handGripsmdLeftlValue + handGripsmdRightlValue}</TableCell>
      <TableCell>{handGripstotalscore}</TableCell>
    </TableRow>

    {/* Other Factors */}
    <TableRow key="other-factors">
      <TableCell>Task Duration</TableCell>
      <TableCell>{taskDurationScore}</TableCell>
      <TableCell>-</TableCell>
      <TableCell>{taskDurationScore}</TableCell>
    </TableRow>
    <TableRow key="load">
      <TableCell>Load</TableCell>
      <TableCell>{loadScore}</TableCell>
      <TableCell>-</TableCell>
      <TableCell>{loadScore}</TableCell>
    </TableRow>
    <TableRow key="job-demand">
      <TableCell>Job Demand</TableCell>
      <TableCell>{jobDemandScore}</TableCell>
      <TableCell>-</TableCell>
      <TableCell>{jobDemandScore}</TableCell>
    </TableRow>
    <TableRow key="job-satisfaction">
      <TableCell>Job Satisfaction</TableCell>
      <TableCell>{jobSatisfactionScore}</TableCell>
      <TableCell>-</TableCell>
      <TableCell>{jobSatisfactionScore}</TableCell>
    </TableRow>
    <TableRow key="social-support">
      <TableCell>Social Support</TableCell>
      <TableCell>{socialSupportScore}</TableCell>
      <TableCell>-</TableCell>
      <TableCell>{socialSupportScore}</TableCell>
    </TableRow>
  </TableBody>
</Table>
    </div>
  
    <div className="w-full max-w-[800px] p-6 mt-6 bg-white shadow-md rounded-lg border border-gray-200">
  <h2 className="text-lg font-semibold text-gray-800 mb-4">Summary of Scores</h2>
  <div className="space-y-3">
    <div className="flex justify-between">
      <span className="text-gray-600">Total Score of BP:</span>
      <span className="text-teal-700 font-medium">{String(totalBPScore)}</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">Total Score of MDL:</span>
      <span className="text-teal-700 font-medium">{String(totalMDLScore)}</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">Final Score:</span>
      <span className="text-teal-700 font-bold">{String(totalScore)}</span>
    </div>
    <hr className="my-3 border-t border-gray-300" />
    <div className="flex justify-between">
      <span className="text-gray-800 font-semibold">Risk Level:</span>
      <span
        className={`font-bold ${
          riskLevel === "Negligible risk"
            ? "text-green-700"
            : riskLevel === "Low risk"
            ? "text-yellow-600"
            : riskLevel === "Medium risk"
            ? "text-orange-500"
            : riskLevel === "High risk"
            ? "text-red-500"
            : riskLevel === "Very high risk"
            ? "text-red-800"
            : "text-gray-500"
        }`}
      >
        {riskLevel}
      </span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-800 font-semibold">Action:</span>
      <span
        className={`font-bold ${
          riskLevel === "Negligible risk"
            ? "text-green-700"
            : riskLevel === "Low risk"
            ? "text-yellow-600"
            : riskLevel === "Medium risk"
            ? "text-orange-500"
            : riskLevel === "High risk"
            ? "text-red-500"
            : riskLevel === "Very high risk"
            ? "text-red-800"
            : "text-gray-500"
        }`}
      >
        {action}
      </span>
    </div>
  </div>
</div>

    </div>
    

    
  );
   
};

export default ErgonomicRiskTable;
