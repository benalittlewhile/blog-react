import React from "react";
export function ToLearn() {
  return (
    <div class="center">
      <div class="learning">
        <h4>
          Here's a list of some of the topics/technologies I'd like to learn
          about in the near future:
        </h4>
        <p>
          <ul>
            <li>
              HTML/CSS
              <ul>
                <li>
                  I'd like to get a better sense for what I do and don't know in
                  html and css, focusing on developing a strong foundation on
                  the core technologies before moving to{" "}
                  <del>the fun stuff</del> more advanced frameworks and tools.
                </li>
              </ul>
            </li>
            <li>
              Javascript
              <ul>
                <li>
                  Continued vanilla topics including objects, classes, and
                  advanced function techniques
                </li>
                <li>
                  <del>Map</del>
                </li>
                <li>
                  <del>Reduce</del>
                </li>
                <li>
                  <del>filter</del>
                </li>
                <li>
                  <del>Arrow functions</del>
                </li>
                <li>
                  <del>Object/array decomposition</del>
                </li>
                <li>
                  These last two were especially enjoyable to learn and work
                  with, they feel like such natural extensions of the language.
                  I love them.
                </li>
                <li>Typescript - there, now it's on the list</li>
              </ul>
            </li>
            <li>
              React
              <ul>
                <li>
                  I'm familiar with general structure in React, and I know
                  enough to start an application. Now it's time to make
                  something "real". To me this means something that talks to a
                  backend and does something useful, at the moment I'm
                  considering something with the Spotify api.
                </li>
              </ul>
            </li>
            <li>
              Node
              <ul>
                <li>
                  I've really enjoyed my exposure to express, now I want to put
                  it to work. In all likelihood this will mean the Spotify
                  project I mentioned in the React section. This should provide
                  an excellent opportunity to truly learn an implement auth for
                  external apis, something I've been meaning to do for some time
                  now.
                </li>
              </ul>
            </li>
            <li>
              Jamstack
              <ul>
                One of my good friends has a passion for devops and the cloud
                that I've enjoyed watching him grow on our way through college.
                We've talked a lot about serverless and other similar
                technologies for hosting and supporting applications, so I have
                a little exposure to some of the concepts supporting jamstack,
                but not much first or secondhand exposure to jamstack itself.
                I'm looking forward to diving into this tool, arguably a whole
                new paradigm for web hosting and applications, and seeing what
                all the fuss is about.
              </ul>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
