// @ts-nocheck
import { Formik } from "formik";
import * as React from "react";
import { Stage4Props } from "./stage-4.interface";

const Stage4: React.FC<Stage4Props> = ({
  onBack,
  onClose,
  onNext,
  onSubmit,
}) => {
  const [render, setRender] = React.useState<
    Array<
      (
        setFieldValue: (
          field: string,
          value: any,
          shouldValidate?: boolean | undefined
        ) => void,
        values: {
          education: {
            [name: string]: { [key: string]: string } & {
              period: { from: string; to: string };
            };
          };
        }
      ) => JSX.Element
    >
  >();

  const contRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const renderExpInput = (
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => void,
    values: {
      education: {
        [name: string]: { [key: string]: string } & {
          period: { from: string; to: string };
        };
      };
    }
  ) => (
    <div className="education-item">
      <div className="form-field">
        <label
          htmlFor={`edu${contRef.current?.childNodes?.length || 0}`}
          className="form-label"
        >
          Name:
        </label>
        <input
          required
          placeholder="Enter education name."
          type="text"
          className="form-control"
          id={`edu${contRef.current?.childNodes?.length || 0}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("education", {
              ...values.education,
              // @ts-ignore
              [`edu${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.education[
                  // @ts-ignore
                  `edu${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                name: e.currentTarget.value,
              },
            })
          }
        />
      </div>
      <div className="form-field">
        <label
          htmlFor={`specialization${contRef.current?.childNodes?.length || 0}`}
          className="form-label"
        >
          Specialization:
        </label>
        <input
          required
          placeholder="Enter your specialization"
          type="text"
          className="form-control"
          id={`specialization${contRef.current?.childNodes?.length || 0}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("education", {
              ...values.education,
              // @ts-ignore
              [`edu${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.education[
                  // @ts-ignore
                  `edu${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                specialization: e.currentTarget.value,
              },
            })
          }
        />
      </div>
      <div className="form-field">
        <label
          htmlFor={`from${contRef.current?.childNodes?.length || 0}`}
          className="form-label"
        >
          Period, from:
        </label>
        <input
          required
          placeholder="Enter start date"
          type="text"
          className="form-control"
          id={`from${contRef.current?.childNodes?.length || 0}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("education", {
              ...values.education,
              [`edu${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.education[
                  // @ts-ignore
                  `edu${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                period: {
                  ...(values.education[
                    // @ts-ignore
                    `edu${contRef.current?.childNodes?.length || 0}`
                  ]?.period ?? []),
                  from: e.currentTarget.value,
                },
              },
            })
          }
        />
      </div>
      <div className="form-field">
        <label
          htmlFor={`to${contRef.current?.childNodes?.length || 0}`}
          className="form-label"
        >
          Period, to:
        </label>
        <input
          required
          placeholder="Enter end date"
          type="text"
          className="form-control"
          id={`to${contRef.current?.childNodes?.length || 0}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("education", {
              ...values.education,
              [`edu${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.education[
                  // @ts-ignore
                  `edu${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                period: {
                  ...(values.education[
                    // @ts-ignore
                    `edu${contRef.current?.childNodes?.length || 0}`
                  ]?.period ?? []),
                  to: e.currentTarget.value,
                },
              },
            })
          }
        />
      </div>
      <div className="form-field fullwidth">
        <label
          htmlFor={`achievements${contRef.current?.childNodes?.length || 0}`}
          className="form-label"
        >
          Achievements:
        </label>
        <textarea
          placeholder="Enter your achievements. Max 200 symbols."
          className="form-control"
          id={`achievements${contRef.current?.childNodes?.length || 0}`}
          maxLength={200}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setFieldValue("education", {
              ...values.education,
              // @ts-ignore
              [`edu${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.education[
                  // @ts-ignore
                  `edu${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                achievements: e.currentTarget.value,
              },
            })
          }
        />
      </div>
      <div className="underline" />
    </div>
  );

  return (
    <>
      <div className="stage-content">
        <h3>Stage-4: Education</h3>
        <Formik
          initialValues={{ education: [] }}
          onSubmit={(values) => {
            onSubmit(values);
            onNext();
          }}
        >
          {({ handleSubmit, setFieldValue, values }) => (
            <>
              <button
                style={{ marginBottom: "20px" }}
                type="button"
                className="btn btn-outline-success"
                onClick={() =>
                  setRender((prevState) => {
                    if (prevState) {
                      return [...prevState, renderExpInput];
                    }
                    return [renderExpInput];
                  })
                }
              >
                + Add education.
              </button>
              <form onSubmit={handleSubmit} className="form">
                <div className="education-container" ref={contRef}>
                  {render &&
                    render.length > 0 &&
                    render.map((item, i) => (
                      <div key={i.toString()}>
                        {item(setFieldValue, values)}
                      </div>
                    ))}
                </div>

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
            </>
          )}
        </Formik>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "64%" }}
          aria-valuenow={64}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </>
  );
};

export { Stage4 };
