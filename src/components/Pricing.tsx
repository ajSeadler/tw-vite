import { CheckCircle } from "lucide-react";
import { plans } from "../data/plans";

export default function PricingComponent() {
  return (
    <>
      <section className="bg-neutral-900 py-16">
        <div className="px-6 mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Simple pricing, no surprises.
            </h2>
            <p className="text-lg font-light text-gray-400">
              Flexible plans designed to suit your team's needs—whether you're
              just starting out or scaling up.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-gray-800 text-white rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <p className="text-gray-400 mb-8">{plan.description}</p>
                  <div className="flex justify-center items-baseline mb-6">
                    <span className="mr-2 text-5xl font-extrabold text-teal-500">
                      ${plan.price}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-4 text-left text-gray-300">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-teal-500 w-5 h-5" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-teal-500 w-5 h-5" />
                      <span>No hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-teal-500 w-5 h-5" />
                      <span>
                        Premium support:{" "}
                        <span className="font-semibold text-white">
                          {plan.premiumSupport}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-teal-500 w-5 h-5" />
                      <span>
                        Free updates:{" "}
                        <span className="font-semibold text-white">
                          {plan.freeUpdates}
                        </span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="mt-6 inline-block text-center py-2.5 px-5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-300"
                  >
                    Get started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
