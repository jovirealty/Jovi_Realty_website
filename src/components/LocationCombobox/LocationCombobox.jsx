import { useEffect, useState, useMemo, useRef } from "react";
import useLocationSuggestions from "../../hooks/useLocationSuggestions";

import "./LocationCombobox.css";

const RECENT_KEY = "jovi_recent_locations";

const LocationCombobox = ({ 
    value, 
    onSelect, 
    activeTab, 
    popular=["Vancouver","Burnaby","Surrey","Richmond","Coquitlam"],
    placeholder="Enter a city, neighborhood, or area"
}) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState(value || "");
    const [highlight, setHighlight] = useState(0);
    const inputRef = useRef(null);
    const panelRef = useRef(null);

    const { suggestions, loading } = useLocationSuggestions(query, activeTab);

    // Recent Search LocalStorage
    const recents = useMemo(() => {
        try { return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]")}
        catch(err) {return []; }
    }, [open]); // refresh when opening

    const list = useMemo(() => {
        if(!open) return [];
        if(!query) return recents.length ? recents : popular;
        return suggestions;
    }, [open, query, recents, popular, suggestions]);

    function commitSelection(name) {
        onSelect(name);
        setQuery(name);
        // save to recents (uniques, max 5)
        const next = [name, ...recents.filter(x => x !== name)].slice(0, 5);
        localStorage.setItem(RECENT_KEY, JSON.stringify(next));
        setOpen(false);
    }

    function onKeyDown(e) {
        if(!open) return;
        else if(e.key === "ArrowDown") {
            e.preventDefault();
            setHighlight(i => Math.min(i+1, list.length - 1));
        }
        else if(e.key === "ArrowUp") { 
            e.preventDefault();
            setHighlight(i => Math.max(i-1, 0));
        }
        else if (e.key === "Enter") {
            e.preventDefault();
            if(list[highlight]) {
                commitSelection(list[highlight]);
            }
        } else if(e.key === "Escape") {
            setOpen(false);
        }
    }

    useEffect(() => {
        function handleClickOutside(ev) {
            if(!panelRef.current || !inputRef.current) {
                return;
            }
            if(!panelRef.current.contains(ev.target) && !inputRef.current.contains(ev.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="location-combobox" style={{ position: "relative" }}>
            <input 
                ref={inputRef}
                type="text"
                className="form-control"
                role="combobox"
                aria-expanded={open}
                aria-autocomplete="list"
                placeholder={placeholder}
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setOpen(true);
                    setHighlight(0);
                }}
                onKeyDown={onKeyDown}
            />
            {open && (
                <div ref={panelRef} role="listbox" className="autocomplete-panel">
                    {!query && recents.length > 0 && (<div className="panel-label">Recent Search</div>)}
                    {!query && recents.length === 0 && (<div className="panel-label">Popular Search</div>)}
                    {query && (<div className="panel-label">{loading ? "Searching..." : "Suggestions"}</div>)}

                    {list.length === 0 && !loading && (<div className="empty">No matches</div>)}

                    {list.map((name, i) => (
                        <button
                            key={name + i}
                            role="option"
                            aria-selected={i === highlight}
                            className={`option ${i === highlight ? "active" : "" }`}
                            onMouseEnter={() => setHighlight(i)}
                            onClick={() => commitSelection(name)}
                        >
                            {query ? (<span dangerouslySetInnerHTML={{
                                __html: name.replace(new RegExp(`($(query))`, "ig"), "<b>$1</b>")
                            }} />) : name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LocationCombobox;