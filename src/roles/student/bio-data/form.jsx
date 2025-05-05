import React from "react";
import { useForm } from "react-hook-form";
const PortfolioForm = ({ section }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  if (section == 0) {
    return (
      <div className="p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              {...register("title", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.title && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Employment Type<span className="text-red-500">*</span>
            </label>
            <select
              {...register("employmentType", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select type</option>
              <option value="fullTime">Full-time</option>
              <option value="partTime">Part-time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
            </select>
            {errors.employmentType && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Company or Organization<span className="text-red-500">*</span>
            </label>
            <input
              {...register("company", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.company && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              {...register("currentlyWorking")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              I am currently working in this role
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register("startDate", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.startDate && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              End Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register("endDate", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.endDate && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Location<span className="text-red-500">*</span>
            </label>
            <input
              {...register("location", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.location && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Location Type<span className="text-red-500">*</span>
            </label>
            <input
              {...register("locationType", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.locationType && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Skills<span className="text-red-500">*</span>
            </label>
            <div className="border border-gray-300 rounded-md p-4">
              <div className="flex items-center justify-between mb-2">
                <input
                  {...register("skill1")}
                  placeholder="Add a skill"
                  className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
                />
                <button type="button" className="text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between mb-2">
                <input
                  {...register("skill2")}
                  placeholder="Add a skill"
                  className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
                />
                <button type="button" className="text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save
          </button>
        </form>
      </div>
    );
  } else if (section == 1) {
    return (
      <>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Project</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                {...register("title", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.title && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                {...register("projectName")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Company or Organization<span className="text-red-500">*</span>
              </label>
              <input
                {...register("company", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.company && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                {...register("currentlyWorking")}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I am currently working in this role
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Start Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register("startDate", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.startDate && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                End Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register("endDate", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.endDate && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location<span className="text-red-500">*</span>
              </label>
              <input
                {...register("location", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.location && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location Type<span className="text-red-500">*</span>
              </label>
              <input
                {...register("locationType", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.locationType && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("description", { required: true })}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              {errors.description && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Skills<span className="text-red-500">*</span>
              </label>
              <div className="border border-gray-300 rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <input
                    {...register("skill1")}
                    placeholder="Add a skill"
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
                  />
                  <button type="button" className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <input
                    {...register("skill2")}
                    placeholder="Add a skill"
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
                  />
                  <button type="button" className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save
            </button>
          </form>
        </div>
      </>
    );
  } else if (section == 2) {
    return (
      <>
        <div className="p-6 bg-gray-100 rounded-lg h-full">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                {...register("title", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.title && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                School/College Name
              </label>
              <select
                {...register("school")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select school</option>
                <option value="university1">University 1</option>
                <option value="university2">University 2</option>
                <option value="college1">College 1</option>
                <option value="college2">College 2</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Company or Organization<span className="text-red-500">*</span>
              </label>
              <input
                {...register("company", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.company && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                {...register("currentlyStudying")}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I am currently studying in this role
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Start Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register("startDate", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.startDate && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                End Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register("endDate", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.endDate && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location<span className="text-red-500">*</span>
              </label>
              <input
                {...register("location", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.location && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location Type<span className="text-red-500">*</span>
              </label>
              <input
                {...register("locationType", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.locationType && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("description", { required: true })}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              {errors.description && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Skills<span className="text-red-500">*</span>
              </label>
              <div className="border border-gray-300 rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <input
                    {...register("skill1")}
                    placeholder="Add a skill"
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
                  />
                  <button type="button" className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <input
                    {...register("skill2")}
                    placeholder="Add a skill"
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
                  />
                  <button type="button" className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save
            </button>
          </form>
        </div>
      </>
    );
  } else if (section == 3) {
    return (
      <>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Skill</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                {...register("title", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.title && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Skill Name<span className="text-red-500">*</span>
              </label>
              <select
                {...register("skillName", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select skill</option>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="design">Design</option>
              </select>
              {errors.skillName && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Company or Organization<span className="text-red-500">*</span>
              </label>
              <input
                {...register("company", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.company && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                {...register("currentlyWorking")}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I am currently working in this role
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Start Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register("startDate", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.startDate && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                End Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register("endDate", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.endDate && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location<span className="text-red-500">*</span>
              </label>
              <input
                {...register("location", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.location && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location Type<span className="text-red-500">*</span>
              </label>
              <input
                {...register("locationType", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.locationType && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("description", { required: true })}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              {errors.description && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Skills<span className="text-red-500">*</span>
              </label>
              <div className="border border-gray-300 rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <input
                    {...register("skill1")}
                    placeholder="Add a skill"
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
                  />
                  <button type="button" className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <input
                    {...register("skill2")}
                    placeholder="Add a skill"
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
                  />
                  <button type="button" className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save
            </button>
          </form>
        </div>
      </>
    );
  }
};

export default PortfolioForm;
