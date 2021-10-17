import { Formik } from "formik";
import * as React from "react";
import { Stage3Props } from "./stage-3.interface";

const Stage3: React.FC<Stage3Props> = ({
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
          experience: {
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
      experience: {
        [name: string]: { [key: string]: string } & {
          period: { from: string; to: string };
        };
      };
    }
  ) => (
    <div className="experience-item">
      <div className="form-field">
        <label
          htmlFor={`company${contRef.current?.childNodes?.length || 0}`}
          className="form-label"
        >
          Company:
        </label>
        <input
          required
          placeholder="Enter company name you worked in"
          type="text"
          className="form-control"
          id={`company${contRef.current?.childNodes?.length || 0}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("experience", {
              ...values.experience,
              // @ts-ignore
              [`company${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.experience[
                  // @ts-ignore
                  `company${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                company: e.currentTarget.value,
              },
            })
          }
        />
      </div>
      <div className="form-field">
        <label
          htmlFor={`position${contRef.current?.childNodes?.length || 0}`}
          className="form-label"
        >
          Position:
        </label>
        <input
          required
          placeholder="Enter your position"
          type="text"
          className="form-control"
          id={`position${contRef.current?.childNodes?.length || 0}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("experience", {
              ...values.experience,
              // @ts-ignore
              [`company${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.experience[
                  // @ts-ignore
                  `company${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                position: e.currentTarget.value,
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
            setFieldValue("experience", {
              ...values.experience,
              [`company${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.experience[
                  // @ts-ignore
                  `company${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                period: {
                  ...(values.experience[
                    // @ts-ignore
                    `company${contRef.current?.childNodes?.length || 0}`
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
            setFieldValue("experience", {
              ...values.experience,
              [`company${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.experience[
                  // @ts-ignore
                  `company${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                period: {
                  ...(values.experience[
                    // @ts-ignore
                    `company${contRef.current?.childNodes?.length || 0}`
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
          htmlFor={`duties${contRef.current?.childNodes?.length || 0}`}
          className="form-label"
        >
          Duties:
        </label>
        <textarea
          placeholder="Enter your duties. Max 200 symbols."
          className="form-control"
          id={`duties${contRef.current?.childNodes?.length || 0}`}
          maxLength={200}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setFieldValue("experience", {
              ...values.experience,
              // @ts-ignore
              [`company${contRef.current?.childNodes?.length || 0}`]: {
                ...(values.experience[
                  // @ts-ignore
                  `company${contRef.current?.childNodes?.length || 0}`
                ] ?? []),
                duties: e.currentTarget.value,
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
        <h3>Stage-3: Experience</h3>
        <Formik
          initialValues={{ experience: {} }}
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
                + Add exp.
              </button>
              <form onSubmit={handleSubmit} className="form">
                <div className="experience-container" ref={contRef}>
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
          style={{ width: "48%" }}
          aria-valuenow={48}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </>
  );
};

export { Stage3 };
