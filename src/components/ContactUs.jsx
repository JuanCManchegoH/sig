import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export function ContactUs() {
  const notify = (text, type) => {
    if (type === 'error') {
      return toast.error(text, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    return toast(text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_8ka88xr', 'template_z30s5pj', form, 'xa4_z_wCixToRFG9O').then(
      () => {
        notify('Todo fue enviado corectamente', 'success');
        setForm({ name: '', email: '', phone: '', message: '' });
      },
      (error) => {
        notify('Ocurrio un error, vuelve a intentarlo mas tarde', 'error');
        console.log(error.text);
      }
    );
    emailjs.send('service_8ka88xr', 'template_z30s5pj', form, 'xa4_z_wCixToRFG9O');
  };

  return (
    <section id="ContactUs" className="pb-20">
    <div className="relative bg-gray-100">
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-sky-600 sm:text-3xl">Contáctanos</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Estaremos respondiendo lo mas pronto posible.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Número de teléfono</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400 mr-3" aria-hidden="true" />
                  <a href="tel:+573023004987">+57 (302) 3004987</a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400 mr-3" aria-hidden="true" />
                  <a href="mailto:sigconsultoriaintegralsas@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail">sigconsultoriaintegralsas@gmail.com</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="user_name" className="sr-only">
                  Nombre Completo
                </label>
                <input
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={form.name}
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  placeholder="Nombre *"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="sr-only">
                  Email
                </label>
                <input
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  value={form.email}
                  id="user_email"
                  name="user_email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  placeholder="Email *"
                />
              </div>
              <div>
                <label htmlFor="user_phone" className="sr-only">
                  Número de teléfono
                </label>
                <input
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  value={form.phone}
                  type="text"
                  name="user_phone"
                  id="user_phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  placeholder="Número de teléfono *"
                />
              </div>
              <div>
                <label htmlFor="user_message" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  onChange={(e) => setForm({ ...form, message: e.target.value })} 
                  value={form.message}
                  id="user_message"
                  name="user_message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  placeholder="Mensaje *"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
