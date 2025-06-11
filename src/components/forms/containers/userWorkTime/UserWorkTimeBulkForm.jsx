import { Button } from '@/components/Global/Button'
import { TrashIcon } from '@/components/Icons'
import { TIME_LIGHT_END, TIME_LIGHT_START, TIME_NIGHT_END, TIME_NIGHT_START } from '@/helpers/DEFAULT_OPTIONS'
import { generateUserTiming } from '@/utils/functions'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { RHFDatePicker, RHFSelectField } from '../../fields'
import UserField from '../../global/UserField'


const UserWorkTimeBulkDefaultValues = {}
const UserWorkTimeBulkValidationSchema = z.object({})

const UserWorkTimeBulkForm = () => {
  const name = 'op_partial_collection'
  const methods = useForm({
    defaultValue: UserWorkTimeBulkDefaultValues,
    mode: "onBlur",
    resolver: zodResolver(UserWorkTimeBulkValidationSchema)
  });
  const { handleSubmit, watch, setValue, setError, clearErrors, reset, formState: { isLoading, isSubmitting } } = methods

  // generate timing
  const onGenerateTiming = () => {
    const data = generateUserTiming(watch("setting"));
    setValue("timing", data?.timings);
    setValue("views", data?.views);
  };


  const onSubmit = async () => {
    const data = watch("timing")
    setValue("timing", []);
    setValue("views", []);
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-4 items-center gap-2">
            <UserField
              className="min-w-[170px] border-0 !rounded-none !h-full"
              table={"account"}
              label="user"
              name="setting.account_id"
            />
            <RHFSelectField
              label="period"
              name="setting.period"
              value={1}
              options={[
                { name: "Light", id: 1 },
                { name: "Night", id: 2 },
                { name: "Both", id: 3 },
              ]}
            />
            <RHFSelectField
              label="Period of days"
              name="setting.long"
              value={3}
              options={[
                { name: "Day", id: 1 },
                { name: "Week", id: 7 },
                { name: "Month", id: 30 },
                { name: "3 Month", id: 90 },
              ]}
            />
            <RHFDatePicker
              label="start_day"
              name="setting.start_day"
              containerClassName="h-10 !h-full min-w-[55px]"
            />

            {watch("setting.period") === 1 || watch("setting.period") === 3 ? (
              <>
                <RHFSelectField
                  label="time_light_start"
                  name="setting.time_light_start"
                  options={TIME_LIGHT_START}
                />
                <RHFSelectField
                  label="time_light_end"
                  name="setting.time_light_end"
                  options={TIME_LIGHT_END}
                />
              </>
            ) : null}
            {watch("setting.period") === 2 || watch("setting.period") === 3 ? (
              <>
                <RHFSelectField
                  label="time_night_start"
                  name="setting.time_night_start"
                  options={TIME_NIGHT_START}
                />
                <RHFSelectField
                  label="time_night_end"
                  name="setting.time_night_end"
                  options={TIME_NIGHT_END}
                />
              </>
            ) : null}
          </div>
          <Button
            // disabled={
            //   !watch("setting.account_id") ||
            //    !watch("setting.account_id")
            // }
            type="button"
            onClick={onGenerateTiming}
            title="Generate timing"
            // loading={isGenerating}
            classes="whitespace-nowrap mt-4 w-[200px]"
          />

          {watch("timing")?.length ? (
            <>
              <div className="flex items-center capitalize bg-gray-100 border py-2 mt-4">
                <div className="px-2 text-center w-10">#</div>
                <div className="px-2 text-center flex-1">User</div>
                <div className="px-2 text-center flex-1">Date</div>
                <div className="px-2 text-center flex-1">time_light_start</div>
                <div className="px-2 text-center flex-1">time_light_end</div>
                <div className="px-2 text-center flex-1">time_night_start</div>
                <div className="px-2 text-center flex-1">time_night_end</div>
                <div className="px-2 text-center flex-1">Action</div>
              </div>
              {watch("views")?.map((time, index) => (
                <div
                  className="flex items-center capitalize border-b py-2"
                  key={index}
                >
                  <div className="px-2 text-center w-10">{index + 1}</div>
                  <div className="px-2 text-center flex-1">
                    {/* {CACHE_LIST?.account?.[watch("setting.user_id")]} */}
                  </div>
                  <div className="px-2 text-center flex-1">
                    {new Date(time?.date).toLocaleDateString("en-US")}
                  </div>
                  <div className="px-2 text-center flex-1">
                    {time?.time_light_start
                      ? new Date(time?.time_light_start).toLocaleTimeString(
                        "en-US"
                      )
                      : "---"}
                  </div>
                  <div className="px-2 text-center flex-1">
                    {time?.time_light_end
                      ? new Date(time?.time_light_end).toLocaleTimeString("en-US")
                      : "---"}
                  </div>
                  <div className="px-2 text-center flex-1">
                    {time?.time_night_start
                      ? new Date(time?.time_night_start).toLocaleTimeString(
                        "en-US"
                      )
                      : "---"}
                  </div>
                  <div className="px-2 text-center flex-1">
                    {time?.time_night_end
                      ? new Date(time?.time_night_end).toLocaleTimeString("en-US")
                      : "---"}
                  </div>
                  <div className="px-2 text-center flex-1">
                    <button
                      className="bg-red-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300 disabled:bg-red-200"
                      onClick={() => { }}
                    >
                      <TrashIcon />{" "}
                    </button>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                title="Save Timing"
                loading={isSubmitting}
              />
            </>
          ) : null}

        </form>
      </FormProvider>
    </>
  )
}

export default UserWorkTimeBulkForm