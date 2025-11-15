import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import z from "zod";

const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.email().min(1, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits!")
    .max(10, "Phone number must be between 7 and 10 digits!")
    .regex(/^\d+$/, "Phone number must contain only numbers!"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "City is required!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="name">
          Name
        </label>
        <input
          className="border-b border-gray-200 p-y2 outline-none text-sm"
          type="text"
          id="name"
          placeholder="Jane Doe"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="border-b border-gray-200 p-y2 outline-none text-sm"
          type="email"
          id="email"
          placeholder="janedoe@gmail.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="phone">
          Phone
        </label>
        <input
          className="border-b border-gray-200 p-y2 outline-none text-sm"
          type="phone"
          id="phone"
          placeholder="123456789"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="address">
          Address
        </label>
        <input
          className="border-b border-gray-200 p-y2 outline-none text-sm"
          type="address"
          id="address"
          placeholder="123 Main St, Anytown"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="city">
          City
        </label>
        <input
          className="border-b border-gray-200 p-y2 outline-none text-sm"
          type="city"
          id="city"
          placeholder="New York"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-sm text-red-500">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer gap-2 hover:bg-gray-900 transition-all duration-300 flex items-center justify-center"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};

export default ShippingForm;
