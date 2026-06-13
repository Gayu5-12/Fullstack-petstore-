import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userId = localStorage.getItem("resetUserId");

    try {
      console.log("UserId:", userId);
      console.log("New Password:", newPassword);
      await api.post(
        "/auth/reset-password",
        {
          userId,
          newPassword,
        }
      );

      alert("Password updated successfully");
      console.log("Password updated");
      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Failed to update password"
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>

      <form onSubmit={handleReset}>
        <div className="mb-3">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            required
          />
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;