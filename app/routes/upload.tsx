import React, { useState, type FormEvent } from "react";
import Navbar from "~/components/Navbar";

const upload = () => {
  const [isprocessing, setIsprocessing] = useState(false);
  const [statusText, setstatusText] = useState("");

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart Feedback for your dream job</h1>
          {isprocessing ? (
            <>
              <h2> {statusText} </h2>
              <img src={"/images/resume-scan.gif"} alt="" className="w-full " />
            </>
          ) : (
            <h2>Drop your Resume for an ATS Score and improvement tips</h2>
          )}
          {!isprocessing && (
            <form
              id="upload-form"
              onSubmit={handlesubmit}
              className="flex flex-col gap-2 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name"> Company Name</label>
                <input
                  type="text"
                  name="company-name"
                  placeholder="Company Name"
                  id="company-name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title"> Job Title</label>
                <input
                  type="text"
                  name="job-title"
                  placeholder="Job Title"
                  id="job-title"
                />
              </div>
              <div className="form-div">
                <label htmlFor="company-name"> Company Name</label>
                <textarea
                  rows={5}
                  name="job-description"
                  placeholder="Job Description"
                  id="job-description"
                />
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default upload;
