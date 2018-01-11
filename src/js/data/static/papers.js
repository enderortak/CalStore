export const keywords = [
  "Combustion and combustion processes",
  "Dual fuel engines",
  "Electric motors",
  "Engine components",
  "Catalytic converters",
  "Particulate filters",
  "Selective catalytic reduction",
  "Fuel injection",
  "Engine modelling",
];
const uploaders = ["Çetin Gürel", "Metin Yılmaz"];
const scientificPapersFolder = "assets/scientificPapers/";
const numOfDownloads = [75, 42, 55, 81, 94];

const getRandom = array =>
  [...Array(Math.floor(Math.random() * 4)).keys()].map(() =>
    array[Math.floor(Math.random() * array.length)]);
const getRandom2 = array => array[Math.floor(Math.random() * array.length)];

const papers = [
  {
    id: 1,
    title: "Accurate Cycle Predictions and Calibration Optimization Using a Two-Stage Global Dynamic Model",
    authors: ["Farraen Mohd Azmin", "Phil Mortimer", "Justin Seabrook"],
    affiliation: "Ricardo UK Ltd.",
    publishedIn: "SAE WCX 2017",
    publishDate: "28.03.2017",
    abstract: `With the introduction in Europe of drive cycles such as RDE and WLTC, transient emissions prediction is more challenging than
        before for passenger car applications. Transient predictions are used in the calibration optimization process to determine the cumulative
        cycle emissions for the purpose of meeting objectives and constraints. Predicting emissions such as soot accurately is the most difficult
        area, because soot emissions rise very steeply during certain transients.
        The method described in this paper is an evolution of prediction using a steady state global model. A dynamic model can provide the
        instantaneous prediction of boost and EGR that a static model cannot. Meanwhile, a static model is more accurate for steady state
        engine emissions. Combining these two model types allows more accurate prediction of emissions against time. A global dynamic
        model combines a dynamic model of the engine air path with a static DoE (Design of Experiment) emission model. The dynamic
        model is constructed using a Volterra series model for the EGR response and a Stochastic Process Model (SPM) for boost pressure.
        Both models are trained using data collected from APRBS (Amplitude Modulated Pseudo Random Binary Sequences) type tests. The
        static model is an SPM trained using data collected in a steady state DoE test.
        The output of the global dynamic model is an accurate prediction of engine emissions with a drive cycle and calibration as model
        inputs. The global dynamic model is called during the calibration optimization process and the cycle cumulative results are used to
        control the constraints and optimize the objectives. This produces final calibration maps ready for immediate vehicle tests without test
        bed validation, thereby improving the efficiency of the calibration process.`,
    url: `${scientificPapersFolder}SAE WCX 2017/2017-01-0583.pdf`,
    uploadedBy: getRandom2(uploaders),
    uploadDate: "12.12.2017",
  },
  {
    id: 2,
    title: "A Predictive Energy Management Strategy Using a Rule-Based Mode Switch for Internal Combustion Engine (ICE) Vehicles",
    authors: ["Haksu Kim", "Jaewook Shin", "Myoungho Sunwoo"],
    affiliation: "Ricardo UK Ltd.",
    publishedIn: "SAE WCX 2017",
    publishDate: "28.03.2017",
    abstract: `With fuel efficiency becoming an increasingly critical aspect of internal combustion engine (ICE) vehicles, the necessity for research
      on efficient generation of electric energy has been growing. An energy management (EM) system controls the generation of electric
      energy using an alternator. This paper presents a strategy for the EM using a control mode switch (CMS) of the alternator for the (ICE)
      vehicles. This EM recovers the vehicle’s residual kinetic energy to improve the fuel efficiency. The residual kinetic energy occurs when
      a driver manipulates a vehicle to decelerate. The residual energy is commonly wasted as heat energy of the brake. In such
      circumstances, the wasted energy can be converted to electric energy by operating an alternator. This conversion can reduce additional
      fuel consumption. For extended application of the energy conversion, the future duration time of the residual power is exploited. The
      duration time is derived from the vehicle’s future speed profile. The future speed profile is non-deterministic in real driving
      environment. Therefore, the proposed EM applies a Markov chain model to stochastically predict the vehicle’s speed. Based on the
      predicted duration time of the residual power, a rule-based mode switching strategy is established. There are three types of control
      modes defined according to the target amount of battery charge. The proposed strategy of this paper was validated through simulation,
      and simulation results show an improvement in fuel efficiency compared to the results of a conventional EM.`,
    url: `${scientificPapersFolder}SAE WCX 2017/2017-01-0584.pdf`,
    uploadedBy: getRandom2(uploaders),
    uploadDate: "12.12.2017",
  },
  {
    id: 3,
    title: "An Application of a Model-Prediction-Based Reference Modification Algorithm to Engine Air Path Control",
    authors: ["Hayato Shirai", "Hayato Nakada", "Akio Matsunaga", "Hiroyuki Tominaga"],
    affiliation: "Toyota Motor Corporation",
    publishedIn: "SAE WCX 2017",
    publishDate: "28.03.2017",
    abstract: `In real-world automotive control, there are many constraints to be considered. In order to explicitly treat the constraints, we introduce a
    model-prediction-based algorithm called a reference governor (RG). The RG generates modified references so that predicted future
    variables in a closed-loop system satisfy their constraints. One merit of introducing the RG is that effort required in control
    development and calibration would be reduced. In the preceding research work by Nakada et al., only a single reference case was
    considered. However, it is difficult to extend the previous work to more complicated systems with multiple references such as the air
    path control of a diesel engine due to interference between the boosting and exhaust gas recirculation (EGR) systems. Moreover, in the
    air path control, multiple constraints need to be considered to ensure hardware limits. Hence, it is quite beneficial to cultivate RG
    methodologies to deal with multiple references and constraints. In this paper, we develop the RG algorithm based on gradient descent
    method to allow for multiple references and constraints. We demonstrate the effectiveness of the presented RG algorithm in a transient
    driving cycle experiment using a real engine, in which constraints are enforced on maximal boost pressure, turbine speed, compressor
    surge and maximal and minimal EGR rates. The experiment implies that we have expanded the applicability of an RG to system with
    multiple references compared to the previous work for only a single reference.`,
    url: `${scientificPapersFolder}SAE WCX 2017/2017-01-0586.pdf`,
    uploadedBy: getRandom2(uploaders),
    uploadDate: "12.12.2017",
  },
  {
    id: 4,
    title: "Multi-Objective Optimization of Transient Air-Fuel Ratio Limitation of a Diesel Engine Using DoE Based Pareto-Optimal Approach",
    authors: ["Cetin Gurel", "Elif Ozmen", "Metin Yilmaz", "Didem Aydin", "Kerem Koprubasi"],
    affiliation: "Ford Motor Company",
    publishedIn: "SAE WCX 2017",
    publishDate: "28.03.2017",
    abstract: `Emissions and fuel economy optimization of internal combustion engines is becoming more challenging as the stringency of
    worldwide emission regulations are constantly increasing. Aggressive transient characteristics of new emission test cycles result in
    transient operation where the majority of soot is produced for turbocharged diesel engines. Therefore soot optimization has become a
    central component of the engine calibration development process. Steady state approach for air-fuel ratio limitation calibration
    development is insufficient to capture the dynamic behavior of soot formation and torque build-up during transient engine operation.
    This paper presents a novel methodology which uses transient maneuvers to optimize the air-fuel ratio limitation calibration, focusing
    on the trade-off between vehicle performance and engine-out soot emissions. The proposed methodology features a procedure for
    determining candidate limitation curves with smoothness criteria considerations. Following the design of test plans, DoE testing is
    performed on the engine test bed using transient maneuvers which are representative of typical customer behavior. Transient data
    obtained from DoE tests are then projected into cumulative performance metrics. After modeling, multi-objective optimization is
    applied for the reconstruction of air-fuel ratio limitation maps considering Pareto optimality between soot emissions and engine
    performance. The methodology is applied to a diesel engine with Euro VI emission norms and experimental results are presented
    including the evaluation of performance and drivability metrics on a test vehicle. Potential areas of future work to improve data
    collection, modeling and optimization processes are also discussed.`,
    url: `${scientificPapersFolder}SAE WCX 2017/2017-01-0587.pdf`,
    uploadedBy: getRandom2(uploaders),
    uploadDate: "12.12.2017",
  },
  {
    id: 5,
    title: "Investigation of Performance Differences and Control Synthesis for Servo-Controlled and Vacuum-Actuated Wastegates",
    authors: ["Robin Holmbom", "Bohan Liang", "Lars Eriksson"],
    affiliation: "Linköping University, Volvo Car Corporation",
    publishedIn: "SAE WCX 2017",
    publishDate: "28.03.2017",
    abstract: `Turbocharging plays an important role in the downsizing of engines. Model-based approaches for boost control are 
    going to increasing the necessity for controlling the wastegate flow more accurately. In today’s cars, the wastegate is 
    usually only controlled with a duty cycle and without position feedback. Due to nonlinearities and varying disturbances a duty cycle
    does not correspond to a certain position. Currently the most frequently used feedback controller strategy is to use the boost 
    pressure as the controller reference. This means that there is a large time constant from actuation command to effect in boost pressure, 
    which can impair dynamic performance. In this paper, the performance of an electrically controlled vacuum actuated waste-gate, 
    subsequently referred to as vacuum wastegate, is compared to an electrical servo-controlled wastegate, also referred to as electric 
    wastegate. Their performance is investigated with the two actuators installed on a turbocharged inline four gasoline engine in an engine
    test bench. Furthermore, different control synthesis designs for these different actuators are investigated. A state-feedback controller 
    with standard models for the electric wastegate is described and implemented, which gives a position-controlled wastegate. One main 
    difference between vacuum and electric wastegate is that the latter has a position sensor. To make an extended comparison between the 
    solutions, the vacuum wastegate is also equipped with a position sensor and controller using standard controller design methods. The 
    controllers are implemented and compared both in a simulation environment and evaluated in an engine test bench. In addition, for the
    electric wastegate, both soft-landing and tightening features are also implemented and investigated. Their aim is to improve the 
    lifetime and behavior at or near the closed position.`,
    url: `${scientificPapersFolder}SAE WCX 2017/2017-01-0592.pdf`,
    uploadedBy: getRandom2(uploaders),
    uploadDate: "12.12.2017",
  },
//   {
//     id: 6,
//     title: "",
//     authors: [],
//     affiliation: "",
//     publishedIn: "SAE WCX 2017",
//     publishDate: "28.03.2017",
//     abstract: ``,
//   },
];
papers.forEach((p) => {
  p.keywords = getRandom(keywords); // eslint-disable-line
  p.numOfDownloads = getRandom2(numOfDownloads); // eslint-disable-line
  p.isFeatured = Math.random() >= 0.5; // eslint-disable-line
});

export default papers;
