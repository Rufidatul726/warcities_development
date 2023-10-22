import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

import { tournaments } from "@constants";
import { SearchTournamentProps } from "@types";

const SearchTournament = ({ tournament, setTournament }: SearchTournamentProps) => {
    const [query, setQuery] = useState("");

    const filteredTournaments =
        query === ""
            ? tournaments
            : tournaments.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );

    return (
        <div className='search-tournament'>
            <Combobox value={tournament} onChange={setTournament}>
                <div className='relative w-full'>
                    {/* Button for the combobox. Click on the icon to see the complete dropdown */}
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                            src='/tournament-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='tournament logo'
                        />
                    </Combobox.Button>

                    {/* Input field for searching */}
                    <Combobox.Input
                        className='search-tournament__input'
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
                        placeholder='Warcities Premier League...'
                    />

                    {/* Transition for displaying the options */}
                    <Transition
                        as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")} // Reset the search query after the transition completes
                    >
                        <Combobox.Options
                            className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                            static
                        >
                            {filteredTournaments.length === 0 && query !== "" ? (
                                <Combobox.Option
                                    value={query}
                                    className='search-tournament__option'
                                >
                                    {query}
                                </Combobox.Option>
                            ) : (
                                filteredTournaments.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        value={item}
                                        className='search-tournament__option'
                                    >
                                        {item}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}

export default SearchTournament;