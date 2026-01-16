import Card from "@/components/ui/Card";
import { PAYMENT_OPTIONS } from "@/lib/constants";

export default function PaymentOptions() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Payment Options
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            We offer flexible payment options to make medical transportation accessible for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAYMENT_OPTIONS.map((option) => (
            <Card key={option.name} className="text-center">
              <h3 className="text-xl font-semibold text-navy mb-2">{option.name}</h3>
              <p className="text-gray">{option.description}</p>
            </Card>
          ))}
        </div>

        <p className="text-center mt-8 text-gray">
          Questions about payment? <a href="/contact" className="text-green-dark font-medium hover:text-green">Contact us</a> for more information.
        </p>
      </div>
    </section>
  );
}
