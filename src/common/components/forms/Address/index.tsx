import TextField from "common/components/formInput/TextField"
import SelectField from "common/components/formInput/SelectField"

export type AddressFormProps = {}

export const AddressForm: React.FC<
  AddressFormProps
> = (): React.ReactElement => {
  return (
    <div>
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div className="sm:col-span-2">
          <TextField label="Address" />
        </div>

        <div className="sm:col-span-2">
          <TextField label="Apartment, suite, etc." />
        </div>

        <SelectField label="State / Province" options={[]} />

        <SelectField label="City" options={[]} />

        <SelectField label="Barangay" options={[]} />

        <TextField label="Postal code" />
      </div>
    </div>
  )
}

export default AddressForm
