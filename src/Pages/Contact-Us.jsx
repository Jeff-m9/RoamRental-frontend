import { Header } from "../components/Header";

export function ContactUs() {
  return (
    <div>
      <Header />
      <section className="text-center text-gray-800 text-lg mt-30">
        <p>
          Hey, you've reached out to <strong>RoamRental</strong>!
        </p>
        <p>We're here to help. Feel free to leave us a message.</p>
      </section>
    </div>
  );
}
