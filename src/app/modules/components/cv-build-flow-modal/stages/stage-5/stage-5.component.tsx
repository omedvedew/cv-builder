import { Formik } from "formik";
import * as React from "react";
import { Stage5Props } from "./stage-5.interface";
import bk1 from "../../../../../../assets/bck-01.jpg";
import bk2 from "../../../../../../assets/bck-02.jpg";
import bk3 from "../../../../../../assets/bck-03.jpg";
import bk4 from "../../../../../../assets/bck-04.jpg";
import bk5 from "../../../../../../assets/bck-05.jpg";
import bk6 from "../../../../../../assets/bck-06.jpg";
import bk7 from "../../../../../../assets/bck-07.jpg";
import bk8 from "../../../../../../assets/bck-08.jpg";
import bk9 from "../../../../../../assets/bck-09.jpg";
import bk10 from "../../../../../../assets/bck-10.jpg";

const images: string[] = [bk1, bk2, bk3, bk4, bk5, bk6, bk7, bk8, bk9, bk10];

const Stage5: React.FC<Stage5Props> = ({
  onClose,
  onBack,
  onNext,
  onSubmit,
}) => (
  <>
    <div className="stage-content">
      <h3>Stage-5: Background</h3>
      <Formik
        initialValues={{ background: "" }}
        onSubmit={(values) => {
          onSubmit(values);
          onNext();
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <form onSubmit={handleSubmit} className="form">
            {images &&
              images.map((item, i) => (
                <div
                  key={i.toString()}
                  className="form-field sm-image"
                  style={{ backgroundImage: `url(${item})` }}
                >
                  <label
                    className="radio-label"
                    style={
                      values?.background === item
                        ? { backgroundColor: "rgba(0,0,0,0)" }
                        : undefined
                    }
                  >
                    <input
                      type="radio"
                      name="background"
                      className="radio"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.currentTarget.checked) {
                          setFieldValue("background", item);
                        } else {
                          setFieldValue("background", null);
                        }
                      }}
                    />
                  </label>
                </div>
              ))}
            <div className="form-field fullwidth controls">
              <button
                className="btn btn-outline-secondary"
                type="reset"
                onClick={onClose}
              >
                Cancel
              </button>
              <div>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={onBack}
                >
                  Back
                </button>
                <button className="btn btn-outline-primary" type="submit">
                  Next
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "80%" }}
        aria-valuenow={80}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  </>
);

export { Stage5 };
