export const notesMeta = {
    tag: 'Notes',
    tagStyle: 'background:#EDF5F4;color:#4A8C88;',
    title: 'Sparknotes'
};

// To add a new entry:
//   1. Add an object here with slug, date, title, and a one-line preview
//   2. Create the matching file at notes/{slug}.md
export const noteEntries = [
    {
        slug: 'first-law',
        date: 'Mar 2026',
        title: 'first law of thermo',
        preview: '"I like to think about the first law of thermodynamics; that no energy in the universe is created.. and none is destroyed."'
    },
    {
        slug: 'intro',
        date: 'Mar 2026',
        title: 'intro // why i write',
        preview: 'nothing formal, though still curated. through my eyes & in my words.'
    }
];
