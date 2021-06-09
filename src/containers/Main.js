import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";
import Profile from "./profile/Profile";

export default function Main() {
  const [state, setState] = useState({isDark: false});

  useEffect(() => {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }, []);

  const changeTheme = () => {
    setState({isDark: !state.isDark}, () => {
      localStorage.setItem("isDark", state.isDark);
    });
  };

  return (
    <div className={state.isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: state.isDark, changeTheme: changeTheme}}>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Profile />
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
}
