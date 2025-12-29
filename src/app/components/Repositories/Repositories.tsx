'use client';
import React, { useEffect, useState } from 'react';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

type User = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export default function Repositories() {
  const GITHUB_USERNAME = 'cirosantilli';
  const REPO_LIMIT = 5;

  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPO_LIMIT}`
      ),
    ])
      .then(async ([userRes, repoRes]) => {
        if (!userRes.ok || !repoRes.ok)
          throw new Error('Failed to fetch GitHub data');

        const userData: User = await userRes.json();
        const repoData: Repo[] = await repoRes.json();

        setUser(userData);
        setRepos(repoData.slice(0, REPO_LIMIT));
        setLoading(false);
      })
      .catch(() => {
        setError('Unable to load GitHub data');
        setLoading(false);
      });
  }, []);

  return (
    <section className='bg-gray-50 py-20 px-6 lg:px-8'>
      <div className='mx-auto max-w-[1100px]'>
        {/* Header */}
        {user && (
          <div className='flex items-center gap-4 mb-12'>
            <img
              src={user.avatar_url}
              alt={user.login}
              className='w-16 h-16 rounded-full border border-gray-200'
            />

            <a
              href={user.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xl font-semibold text-gray-900 hover:underline'
            >
              {user.login}
            </a>
          </div>
        )}

        {/* States */}
        {loading && (
          <p className='text-gray-600 text-sm'>Loading repositories…</p>
        )}

        {error && <p className='text-red-500 text-sm'>{error}</p>}

        {/* Repo Cards */}
        {!loading && !error && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='group bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
              >
                <h3 className='text-lg font-semibold text-gray-900 group-hover:underline'>
                  {repo.name}
                </h3>

                <p className='mt-2 text-sm text-gray-600 line-clamp-3'>
                  {repo.description ?? 'No description provided.'}
                </p>

                <div className='mt-4 flex items-center justify-between text-xs text-gray-500'>
                  <span>{repo.language ?? '—'}</span>

                  <div className='flex gap-4'>
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
