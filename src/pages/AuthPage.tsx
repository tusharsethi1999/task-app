import { useState } from 'react';
import { useAuth } from '../providers/AuthProvider';
import axios from 'axios';
import type { User } from '../models/UserModel';
import config from '../setup/config.json';

export const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const url = config.API_URL;
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { access_token } = (
        await axios.post<{ access_token: string }>(`${url}/auth/login`, {
          email,
          password,
        })
      ).data;
      const user: User = (
        await axios.get(`${url}/user/profile`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
      ).data;
      login(user, access_token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
