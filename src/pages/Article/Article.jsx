//Build Helpers
import React from 'react';

const Article = (props) => {

  return (
    <div className="Articles-Card-C big">
      <div className="articles-card-hero" style={{ backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8866de82-76be-4b37-bf8a-1891212d63d7/deev0tc-0e6c93f9-d352-4c32-ae86-7ea5f2b7a98d.png/v1/fill/w_444,h_250,q_70,strp/uncertainty_engine_by_shnestor_deev0tc-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDgwIiwicGF0aCI6IlwvZlwvODg2NmRlODItNzZiZS00YjM3LWJmOGEtMTg5MTIxMmQ2M2Q3XC9kZWV2MHRjLTBlNmM5M2Y5LWQzNTItNGMzMi1hZTg2LTdlYTVmMmI3YTk4ZC5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5ghtsgEoskyV8-cyq-70opHGxJrUsrF2k1f_CWxlfVs)" }}>
        <div className="container content-container on-hero">
          <h1 className="mb-3">
            Some Hero Title
          </h1>
          <p>
            Some paragraph
          </p>
        </div>
      </div>
      <div className="articles-card-panel p-5">
        <div className="text-grey container full-article">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Article;