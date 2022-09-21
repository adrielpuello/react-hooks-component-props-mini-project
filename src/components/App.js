import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = 'Underreacted'/>
      <About image = "https://lh3.googleusercontent.com/a-/ACNPEu_zDTZU27QG2KPZigGhc_rYxL_YYuuQpXWjAHSXaw=s360-p-rw-no" about = "Hey there! My name is Adriel Puello and I am super excited to walk you through what I have learned thus far on my JSX/React journey!"/>
      <ArticleList />
    </div>
  );
}

export default App;
