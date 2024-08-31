'use client';

import React, { useEffect, useState } from 'react';
import { SelectItem, SelectGroup, Select } from '@bibleio/design';

interface Bible {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
}

export default function BibleSelect() {
  const [bibles, setBibles] = useState<Bible[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    async function getBibles() {
      try {
        const response = await fetch(
          'https://bible.helloao.org/api/available_translations.json'
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const data = await response.json();
        setBibles(data.translations);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      }
    }
    getBibles();
  }, []);

  if (!bibles) return <p className="text-body">Loading Bibles...</p>;
  if (error) return <p className="text-body text-dark-red">{error.message}</p>;
  if (bibles)
    return (
      <Select
        label="Bible"
        className="rounded-[0px] border-none bg-transparent p-0 text-h4 shadow-transparent"
      >
        <SelectGroup>
          {bibles.map((bible) => (
            <SelectItem value={bible.id}>{bible.name}</SelectItem>
          ))}
        </SelectGroup>
      </Select>
    );
}
