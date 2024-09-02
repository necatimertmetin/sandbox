import React from "react";
import "./App.css";
import { ToastProvider, useToastContext } from "./ToastProvider";

const ToastTrigger = () => {
  const toast = useToastContext();

  return (
    <header>
      <h1
        style={{
          color: "#FF9874",
          margin: "10px 0",
          textAlign: "center",
        }}
        onClick={() => {toast.success("heyoo"); toast.warning("warning"); toast.error("error"); toast.info("info")}}
      >
        Welcome to My App
      </h1>
    </header>
  );
};

function App() {
  return (
    <ToastProvider theme="dark" duration={6000}>
      <div className="App">
        <ToastTrigger />
        <main>
          <section>
            <h2 style={{ color: "#7695FF" }}>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </section>
          <section>
            <h2 style={{ color: "#AAB396" }}>Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ac nisi sit amet elit facilisis dapibus a vel est. Sed
              tristique, justo non cursus faucibus, odio odio fermentum purus,
              non consectetur erat magna eget mauris.
            </p>
            <ul>
              <li>Service 1: Lorem ipsum dolor sit amet</li>
              <li>Service 2: Consectetur adipiscing elit</li>
              <li>Service 3: Sed do eiusmod tempor incididunt</li>
            </ul>
          </section>
          <section>
            <h2 style={{ color: "#674636" }}>Contact</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              facilisis eros vel elit consectetur, sed ultrices est sagittis.
              Mauris non magna nec leo egestas ultricies. Integer euismod urna
              eu dolor varius cursus.
            </p>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </section>
        </main>
        <footer>
          <p style={{ color: "#ECDFCC" }}>Footer Content &copy; 2024</p>
        </footer>
      </div>
    </ToastProvider>
  );
}

export default App;
