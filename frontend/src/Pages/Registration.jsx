import React, { useState } from 'react';

const Registration = () => {
  const [activeForm, setActiveForm] = useState(null);

  const [editorFormData, setEditorFormData] = useState({
    emailEditor: '',
    nameEditor: '',
    softwaresUsed: '',
    portfolioLink: '',
    passWordEditor: '',
    confrimPasswordEditor: '',
  });

  const [creatorFormData, setCreatorFormData] = useState({
    emailCreator: '',
    nameCreator: '',
    ytChannelName: '',
    passWordCreator: '',
    confrimPasswordCreator: '',
    ytLink: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitEditor = (e) => {
    e.preventDefault();
    const { emailEditor, passWordEditor, confrimPasswordEditor } = editorFormData;

    setErrorMessage('');
    setSuccessMessage('');

    if (emailEditor.length === 0) {
      setErrorMessage('🚨 Uh-oh! You forgot your email 😬📧');
    } else if (passWordEditor.length === 0) {
      setErrorMessage('Can’t vibe in without a password 🚫✨');
    } else if (confrimPasswordEditor.length === 0) {
      setErrorMessage('Type it again, just to vibe check ✅');
    } else if (passWordEditor.length < 8) {
      setErrorMessage('Password’s on soft mode. Boost it to 8+ 🔒⚡');
    } else if (confrimPasswordEditor !== passWordEditor) {
      setErrorMessage('Passwords ain’t twins 💔');
    } else {
      setSuccessMessage('Welcome aboard, legend 🛳️🔥');
    }
  };

  const handleSubmitCreator = (e) => {
    e.preventDefault();
    const { emailCreator, passWordCreator, confrimPasswordCreator } = creatorFormData;

    setErrorMessage('');
    setSuccessMessage('');

    if (emailCreator.length === 0) {
      setErrorMessage('🚨 Uh-oh! You forgot your email 😬📧');
    } else if (passWordCreator.length === 0) {
      setErrorMessage('Can’t vibe in without a password 🚫✨');
    } else if (confrimPasswordCreator.length === 0) {
      setErrorMessage('Type it again, just to vibe check ✅');
    } else if (passWordCreator.length < 8) {
      setErrorMessage('Password’s on soft mode. Boost it to 8+ 🔒⚡');
    } else if (confrimPasswordCreator !== passWordCreator) {
      setErrorMessage('Passwords ain’t twins 💔');
    } else {
      setSuccessMessage('Welcome to the squad 🙌✨');
    }
  };

  const handleChangeForCreator = (e) => {
    const { name, value } = e.target;
    setCreatorFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeForEditor = (e) => {
    const { name, value } = e.target;
    setEditorFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white placeholder-primaryText font-semibold border border-purple-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition';

  const formContainerClass =
    'bg-gradient-to-br mt-20 from-slate-900 via-purple-900 to-slate-900 bg-opacity-30 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg w-full space-y-4';

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4'>
      {activeForm !== 'creatorRegistration' && activeForm !== 'editorRegistration' && (
        <div className="flex flex-col space-y-6 text-center">
          <button
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-3 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition duration-300 shadow-lg"
            onClick={() => setActiveForm('editorRegistration')}
          >
            ✂️ Join as Editor
          </button>
          <button
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-3 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition duration-300 shadow-lg"
            onClick={() => setActiveForm('creatorRegistration')}
          >
            📹 Join as Creator
          </button>
        </div>
      )}

      {activeForm === 'creatorRegistration' && (
        <form onSubmit={handleSubmitCreator} className={formContainerClass}>
          <input type='text' name='nameCreator' placeholder='What should we call you? 🏷️' value={creatorFormData.nameCreator} required onChange={handleChangeForCreator} className={inputClass} />
          <input type='email' name='emailCreator' placeholder='Slide your email in 👇' value={creatorFormData.emailCreator} onChange={handleChangeForCreator} required className={inputClass} />
          <input type='text' name='ytChannelName' placeholder='What’s your channel called? 👾📺' value={creatorFormData.ytChannelName} onChange={handleChangeForCreator} required className={inputClass} />
          <input type='url' name='ytLink' placeholder='Plug in your channel URL 🚀📹' value={creatorFormData.ytLink} onChange={handleChangeForCreator} required className={inputClass} />
          <input type='password' name='passWordCreator' placeholder='Set your secret code 🔑 (aka password)' value={creatorFormData.passWordCreator} onChange={handleChangeForCreator} required className={inputClass} />
          <input type='password' name='confrimPasswordCreator' placeholder='Type it again, no typos allowed 🤞' value={creatorFormData.confrimPasswordCreator} onChange={handleChangeForCreator} required className={inputClass} />
          {successMessage && <label className="text-green-400">{successMessage}</label>}
          {errorMessage && <label className="text-red-400">{errorMessage}</label>}
          <button type='submit' className='w-full mt-4 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition'>
            🚀 Let’s get you in!
          </button>
          <button type="button" className="w-full mt-4 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition" onClick={() => setActiveForm('editorRegistration')}>
            ✂️ Wanna join as Editor instead?
          </button>
        </form>
      )}

      {activeForm === 'editorRegistration' && (
        <form onSubmit={handleSubmitEditor} className={formContainerClass}>
          <input type='text' name='nameEditor' placeholder='What should we call you? 🏷️' value={editorFormData.nameEditor} onChange={handleChangeForEditor} required className={inputClass} />
          <input type='email' name='emailEditor' placeholder='Slide your email in 👇' value={editorFormData.emailEditor} onChange={handleChangeForEditor} required className={inputClass} />
          <input type='text' name='softwaresUsed' placeholder='Which apps you vibe with for edits? 💻✨' value={editorFormData.softwaresUsed} onChange={handleChangeForEditor} required className={inputClass} />
          <input type='url' name='portfolioLink' placeholder='Show us the magic. Portfolio link here ✨🖥️' value={editorFormData.portfolioLink} onChange={handleChangeForEditor} required className={inputClass} />
          <input type='password' name='passWordEditor' placeholder='Set your secret code 🔑 (aka password)' value={editorFormData.passWordEditor} onChange={handleChangeForEditor} required className={inputClass} />
          <input type='password' name='confrimPasswordEditor' placeholder='Type it again, no typos allowed 🤞' value={editorFormData.confrimPasswordEditor} onChange={handleChangeForEditor} required className={inputClass} />
          {successMessage && <label className="text-green-400">{successMessage}</label>}
          {errorMessage && <label className="text-red-400">{errorMessage}</label>}
          <button type='submit' className='w-full mt-4 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition'>
            🚀 Let’s get you in!
          </button>
          <button type="button" className="w-full mt-4 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition" onClick={() => setActiveForm('creatorRegistration')}>
            Become a Creator instead 🚀
          </button>
        </form>
      )}
    </div>
  );
};

export default Registration;




