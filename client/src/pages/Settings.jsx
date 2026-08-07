import { useEffect, useState } from "react";
import axios from "axios";

function Settings() {
  const [settings, setSettings] = useState({
    defaultLanguage: "cpp",
    editorFontSize: 16,
    profilePublic: true,
    theme: "dark",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/users/settings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setSettings(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", settings.theme);

    if (settings.theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [settings.theme]);

  const saveSettings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:5000/api/users/settings",
        settings,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.setItem("theme", settings.theme);

      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">⚙ Settings</h1>

        {/* Account Section */}

        <div
          className="
        bg-slate-900
        border
        border-slate-700
        rounded-3xl
        p-8
        mb-8
        shadow-xl
      "
        >
          <h2 className="text-3xl font-bold mb-6">👤 Account</h2>

          <div className="space-y-5">
            <div>
              <label className="text-gray-400">Name</label>

              <input
                type="text"
                placeholder="Your Name"
                className="
              w-full
              mt-2
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              "
              />
            </div>

            <div>
              <label className="text-gray-400">Email</label>

              <input
                type="email"
                disabled
                placeholder="Your Email"
                className="
              w-full
              mt-2
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              opacity-60
              "
              />
            </div>
          </div>
        </div>

        {/* Appearance */}

        <div
          className="
        bg-slate-900
        border
        border-slate-700
        rounded-3xl
        p-8
      "
        >
          <h2 className="text-3xl font-bold mb-6">🎨 Appearance</h2>

          <div>
            <label className="text-gray-400">Theme</label>

            <select
              value={settings.theme}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  theme: e.target.value,
                })
              }
              className="
            w-full
            mt-2
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            "
            >
              <option value="dark">Dark</option>

              <option value="light">Light</option>
            </select>
          </div>
        </div>

        {/* Editor Settings */}

        <div
          className="
  bg-slate-900
  border
  border-slate-700
  rounded-3xl
  p-8
  mt-8
  "
        >
          <h2 className="text-3xl font-bold mb-6">💻 Editor Settings</h2>

          <div className="space-y-6">
            {/* Language */}

            <div>
              <label className="text-gray-400">Default Language</label>

              <select
                value={settings.defaultLanguage}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    defaultLanguage: e.target.value,
                  })
                }
                className="
        w-full
        mt-2
        bg-slate-800
        border
        border-slate-700
        rounded-xl
        px-4
        py-3
        "
              >
                <option value="cpp">C++</option>

                <option value="java">Java</option>

                <option value="python">Python</option>
              </select>
            </div>

            {/* Font Size */}

            <div>
              <label className="text-gray-400">Editor Font Size</label>

              <select
                value={settings.editorFontSize}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    editorFontSize: Number(e.target.value),
                  })
                }
                className="
        w-full
        mt-2
        bg-slate-800
        border
        border-slate-700
        rounded-xl
        px-4
        py-3
        "
              >
                <option value={14}>14px</option>

                <option value={16}>16px</option>

                <option value={18}>18px</option>

                <option value={20}>20px</option>
              </select>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}

        <div
          className="
  bg-slate-900
  border
  border-slate-700
  rounded-3xl
  p-8
  mt-8
  "
        >
          <h2 className="text-3xl font-bold mb-6">🔒 Privacy</h2>

          <div
            className="
    flex
    justify-between
    items-center
    "
          >
            <div>
              <h3 className="text-xl font-semibold">Public Profile</h3>

              <p className="text-gray-400 mt-1">
                Other developers can see your profile and progress
              </p>
            </div>

            <input
              type="checkbox"
              checked={settings.profilePublic}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profilePublic: e.target.checked,
                })
              }
              className="
      w-6
      h-6
      cursor-pointer
      "
            />
          </div>
        </div>

        {/* Save Button */}

        <button
          onClick={saveSettings}
          className="
  mt-8
  w-full
  bg-linear-to-r
  from-purple-500
  to-blue-500
  hover:scale-[1.02]
  transition
  py-4
  rounded-2xl
  text-xl
  font-bold
  shadow-xl
  "
        >
          💾 Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;
