module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IONM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completed-challenges-container": "CompletedChallenges_completed-challenges-container__Trezz"
};


/***/ }),

/***/ "J83M":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"level-overlay": "LevelUpModal_level-overlay__3KGG6",
	"level-container": "LevelUpModal_level-container__rCPET",
	"level-container__level": "LevelUpModal_level-container__level__2a48L",
	"level-container__title": "LevelUpModal_level-container__title__3IQCp",
	"level-container__text": "LevelUpModal_level-container__text__3V81I",
	"level-container__close": "LevelUpModal_level-container__close__3I09i"
};


/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./challenges.json
var challenges = __webpack_require__("c5aZ");

// EXTERNAL MODULE: ./src/components/LevelUpModal/LevelUpModal.module.scss
var LevelUpModal_module = __webpack_require__("J83M");
var LevelUpModal_module_default = /*#__PURE__*/__webpack_require__.n(LevelUpModal_module);

// CONCATENATED MODULE: ./src/components/LevelUpModal/LevelUpModal.tsx





function LevelUpModal() {
  const {
    level,
    closeLevelUpModal
  } = Object(external_react_["useContext"])(ChallengesContext);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: LevelUpModal_module_default.a['level-overlay'],
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: LevelUpModal_module_default.a['level-container'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
        className: LevelUpModal_module_default.a['level-container__level'],
        children: level
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        className: LevelUpModal_module_default.a['level-container__title'],
        children: "Parab\xE9ns!!!"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: LevelUpModal_module_default.a['level-container__text'],
        children: "Voc\xEA alcan\xE7ou um novo level."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: LevelUpModal_module_default.a['level-container__close'],
        type: "button",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/icons/close.svg",
          alt: "Fechar modal",
          onClick: closeLevelUpModal
        })
      })]
    })
  });
}
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__("xXj+");

// CONCATENATED MODULE: ./src/contexts/ChallengesContext.tsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ChallengesContext = /*#__PURE__*/Object(external_react_["createContext"])({});
function ChallengesProvider(_ref) {
  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  let {
    children // level, currentExperience, challengesCompleted sao armazenados no objeto ...rest

  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: level,
    1: setLevel
  } = Object(external_react_["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(external_react_["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0);
  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(external_react_["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(external_react_["useState"])(null);
  const {
    0: isLevelUpModalOpen,
    1: setIsLevelUpModalOpen
  } = Object(external_react_["useState"])(false);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2); // o segundo parametro esta vazio (array de dependencias) pois eh executado toda vez que alguma informacao for alterada

  Object(external_react_["useEffect"])(() => {
    Notification.requestPermission();
  }, []);
  Object(external_react_["useEffect"])(() => {
    external_js_cookie_default.a.set('level', String(level));
    external_js_cookie_default.a.set('currentExperience', String(currentExperience));
    external_js_cookie_default.a.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play(); // audio 

    if (!external_react_device_detect_["isMobile"] && Notification.permission === "granted") {
      new Notification("You have a new challenge!", {
        body: `Earn ${challenge.amount} xp!`,
        icon: "favicon.png"
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ChallengesContext.Provider, {
    value: {
      level,
      challengesCompleted,
      currentExperience,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge,
      closeLevelUpModal
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])(LevelUpModal, {})]
  });
}
// EXTERNAL MODULE: ./src/components/CompletedChallenges/CompletedChallenges.module.scss
var CompletedChallenges_module = __webpack_require__("IONM");
var CompletedChallenges_module_default = /*#__PURE__*/__webpack_require__.n(CompletedChallenges_module);

// CONCATENATED MODULE: ./src/components/CompletedChallenges/CompletedChallenges.tsx





function CompletedChallenges() {
  const {
    challengesCompleted
  } = Object(external_react_["useContext"])(ChallengesContext);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: CompletedChallenges_module_default.a['completed-challenges-container'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: "Desafios Completos"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: challengesCompleted
    })]
  });
}
// CONCATENATED MODULE: ./src/contexts/CountdownContext.tsx



const CountdownContext = /*#__PURE__*/Object(external_react_["createContext"])({});
let countdownTimeout;
function CountdownProvider({
  children
}) {
  const {
    startNewChallenge
  } = Object(external_react_["useContext"])(ChallengesContext);
  const {
    0: time,
    1: setTime
  } = Object(external_react_["useState"])(0.05 * 60);
  const {
    0: isActive,
    1: setIsActive
  } = Object(external_react_["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(external_react_["useState"])(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60; // altera o estado do botao

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  } // Countdown iniciado: contagem regressiva
  // Recebe dois parametros, o primeiro e a funcao que sera executada, ja o segundo eh a variavel que executara a funcao caso ela seja alterada
  // se clicarmos no botao, o efeito active eh alterado, entao useEffect eh ativado


  Object(external_react_["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CountdownContext.Provider, {
    value: {
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    },
    children: children
  });
}
// EXTERNAL MODULE: ./src/components/Countdown/Countdown.module.scss
var Countdown_module = __webpack_require__("fBdF");
var Countdown_module_default = /*#__PURE__*/__webpack_require__.n(Countdown_module);

// CONCATENATED MODULE: ./src/components/Countdown/Countdown.tsx






let Countdown_countdownTimeout;
function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = Object(external_react_["useContext"])(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); // se nao tiver 2, adiciona a esquerda

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); // se nao tiver 2, adiciona a esquerda

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Countdown_module_default.a['countdown-container'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: minuteLeft
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: minuteRight
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: ":"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: secondLeft
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: secondRight
        })]
      })]
    }), hasFinished ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      disabled: true,
      className: Countdown_module_default.a['countdown-container__button'],
      children: "Ciclo encerrado"
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [" ", isActive ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        type: "button",
        className: `${Countdown_module_default.a['countdown-container__button']} ${Countdown_module_default.a['countdown-container__button--active']}`,
        onClick: resetCountdown,
        children: "Abandonar ciclo"
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        type: "button",
        className: Countdown_module_default.a['countdown-container__button'],
        onClick: startCountdown,
        children: "Iniciar um ciclo"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/ExperienceBar/ExperienceBar.module.scss
var ExperienceBar_module = __webpack_require__("Wqom");
var ExperienceBar_module_default = /*#__PURE__*/__webpack_require__.n(ExperienceBar_module);

// CONCATENATED MODULE: ./src/components/ExperienceBar/ExperienceBar.tsx





function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(external_react_["useContext"])(ChallengesContext);
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: ExperienceBar_module_default.a['experiencebar-container'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: ExperienceBar_module_default.a['experiencebar-container__initial-xp'],
      children: "0 xp"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ExperienceBar_module_default.a['experiencebar-container__progress'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          width: `${percentToNextLevel}%`
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        className: ExperienceBar_module_default.a['experiencebar-container__current-experience'],
        style: {
          left: `${percentToNextLevel}%`
        },
        children: [currentExperience, " xp"]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      children: [experienceToNextLevel, " xp"]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Profile/Profile.module.scss
var Profile_module = __webpack_require__("TLce");
var Profile_module_default = /*#__PURE__*/__webpack_require__.n(Profile_module);

// CONCATENATED MODULE: ./src/components/Profile/Profile.tsx





function Profile() {
  const {
    level
  } = Object(external_react_["useContext"])(ChallengesContext);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Profile_module_default.a['profile-container'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "https://github.com/vitormrts.png",
      alt: "Vitor Martins",
      className: Profile_module_default.a['profile-container__icon']
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Profile_module_default.a['profile-container__info'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        className: Profile_module_default.a['profile-container__name'],
        children: "Vitor Martins"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: Profile_module_default.a['profile-container__level'],
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "icons/level.svg",
          alt: "Level"
        }), "Level ", level]
      })]
    })]
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/styles/Home.module.scss
var Home_module = __webpack_require__("VjbE");
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// EXTERNAL MODULE: ./src/components/ChallengeBox/ChallengeBox.module.scss
var ChallengeBox_module = __webpack_require__("YaUz");
var ChallengeBox_module_default = /*#__PURE__*/__webpack_require__.n(ChallengeBox_module);

// CONCATENATED MODULE: ./src/components/ChallengeBox/ChallengeBox.tsx






function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = Object(external_react_["useContext"])(ChallengesContext);
  const {
    resetCountdown
  } = Object(external_react_["useContext"])(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: ChallengeBox_module_default.a['challengebox-container'],
    children: activeChallenge ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ChallengeBox_module_default.a['challengebox-container--enabled'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
        children: ["Ganhe ", activeChallenge.amount, " xp"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: `icons/${activeChallenge.type}.svg`,
          alt: ""
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: "Novo desafio"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: activeChallenge.description
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          className: ChallengeBox_module_default.a['challengebox-container__failed-button'],
          onClick: handleChallengeFailed,
          children: "Falhei"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          className: ChallengeBox_module_default.a['challengebox-container__succeed-button'],
          onClick: handleChallengeSucceeded,
          children: "Completei"
        })]
      })]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ChallengeBox_module_default.a['challengebox-container--disabled'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "Finalize um ciclo para receber um desafio"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "icons/level-up.svg",
          alt: "Level up"
        }), "Avance de level completando desafios."]
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/components/ThemeSwitcher/ThemeSwitcher.module.scss
var ThemeSwitcher_module = __webpack_require__("m530");
var ThemeSwitcher_module_default = /*#__PURE__*/__webpack_require__.n(ThemeSwitcher_module);

// CONCATENATED MODULE: ./src/components/ThemeSwitcher/ThemeSwitcher.tsx




function ThemeSwitcher() {
  const {
    0: isDark,
    1: setIsDark
  } = Object(external_react_["useState"])(false);
  const lightColors = {
    "white": "#fff",
    "background": "#f2f3f5",
    "gray-line": "#DCDDE0",
    "text": "#666666",
    "text-highlight": "#3A46C4",
    "title": "#2D384D",
    "red": "#E83F5B",
    "green": "#4CD62B",
    "blue": "#5965E0",
    "blue-dark": "#4953B8",
    "blue-twitter": "#2AA9E0",
    "text-button": "#FFF"
  };
  const darkColors = {
    "white": "#575757",
    "background": "#2d2c2c",
    "gray-line": "#DCDDE0",
    "text": "#dfdfdf",
    "text-highlight": "#FFF",
    "title": "#fff",
    "red": "#EA1A3C",
    "green": "#41DF1A",
    "blue": "#3A46C4",
    "blue-dark": "#4953B8",
    "blue-twitter": "#2AA9E0",
    "text-button": "#FFF"
  };

  const transformKey = key => "--color-" + key.replace(/([A-Z])/, "-$1").toLowerCase();

  function changeColors(colors) {
    Object.keys(colors).map(key => document.documentElement.style.setProperty(transformKey(key), colors[key]));
  }

  Object(external_react_["useEffect"])(() => {
    if (isDark) {
      // troca as cores para dark
      changeColors(darkColors);
    } else {
      // troca as cores para light
      changeColors(lightColors);
    }
  }, [isDark]);

  function switchTheme() {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: ThemeSwitcher_module_default.a['switcher-container'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      type: "button",
      className: ThemeSwitcher_module_default.a['profile-container__checkbox'],
      onClick: switchTheme
    }), isDark ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "26",
      height: "26",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "gray",
        fillRule: "evenodd",
        d: "M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "26",
      height: "26",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "gray",
        fillRule: "evenodd",
        d: "M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
      })
    })]
  });
}
// CONCATENATED MODULE: ./src/pages/index.tsx













function Home(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChallengesProvider, {
    level: props.level,
    currentExperience: props.currentExperience,
    challengesCompleted: props.challengesCompleted,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Home_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: "Init | MoveIt"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExperienceBar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CountdownProvider, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: Home_module_default.a['container__section-header'],
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Profile, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ThemeSwitcher, {})]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CompletedChallenges, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Countdown, {})]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChallengeBox, {})
          })]
        })
      })]
    })
  });
}
const getServerSideProps = async ctx => {
  // dados carregados no node (intermediario) antes da pagina ser construida
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};

/***/ }),

/***/ "TLce":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profile-container": "Profile_profile-container__3m3v4",
	"profile-container__icon": "Profile_profile-container__icon__2axVU",
	"profile-container__info": "Profile_profile-container__info__3c8bJ",
	"profile-container__name": "Profile_profile-container__name__2C_aq",
	"profile-container__level": "Profile_profile-container__level__3uuPt"
};


/***/ }),

/***/ "VjbE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__13EVf",
	"container__section-header": "Home_container__section-header__1-3TQ"
};


/***/ }),

/***/ "Wqom":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experiencebar-container": "ExperienceBar_experiencebar-container__10NDa",
	"experiencebar-container__initial-xp": "ExperienceBar_experiencebar-container__initial-xp__16oCB",
	"experiencebar-container__progress": "ExperienceBar_experiencebar-container__progress__2mvYu",
	"experiencebar-container__current-experience": "ExperienceBar_experiencebar-container__current-experience__1G07g"
};


/***/ }),

/***/ "YaUz":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengebox-container": "ChallengeBox_challengebox-container__2z6Sf",
	"challengebox-container--enabled": "ChallengeBox_challengebox-container--enabled__24jIe",
	"challengebox-container--disabled": "ChallengeBox_challengebox-container--disabled__rqrTM",
	"challengebox-container__failed-button": "ChallengeBox_challengebox-container__failed-button___cBY2",
	"challengebox-container__succeed-button": "ChallengeBox_challengebox-container__succeed-button__2zX1g"
};


/***/ }),

/***/ "c5aZ":
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fBdF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdown-container": "Countdown_countdown-container__aCoXf",
	"countdown-container__button": "Countdown_countdown-container__button__1uAEx",
	"countdown-container__button--active": "Countdown_countdown-container__button--active__33QHL"
};


/***/ }),

/***/ "m530":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"switcher-container": "ThemeSwitcher_switcher-container__2AAwt"
};


/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xXj+":
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });