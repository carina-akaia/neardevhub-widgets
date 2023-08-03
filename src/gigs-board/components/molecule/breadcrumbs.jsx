/* INCLUDE: "common.jsx" */
const nearDevGovGigsContractAccountId =
  props.nearDevGovGigsContractAccountId ||
  (context.widgetSrc ?? "devgovgigs.near").split("/", 1)[0];

const nearDevGovGigsWidgetsAccountId =
  props.nearDevGovGigsWidgetsAccountId ||
  (context.widgetSrc ?? "devgovgigs.near").split("/", 1)[0];

function widget(widgetName, widgetProps, key) {
  widgetProps = {
    ...widgetProps,
    nearDevGovGigsContractAccountId: props.nearDevGovGigsContractAccountId,
    nearDevGovGigsWidgetsAccountId: props.nearDevGovGigsWidgetsAccountId,
    referral: props.referral,
  };

  return (
    <Widget
      src={`${nearDevGovGigsWidgetsAccountId}/widget/gigs-board.${widgetName}`}
      props={widgetProps}
      key={key}
    />
  );
}

function href(widgetName, linkProps) {
  linkProps = { ...linkProps };

  if (props.nearDevGovGigsContractAccountId) {
    linkProps.nearDevGovGigsContractAccountId =
      props.nearDevGovGigsContractAccountId;
  }

  if (props.nearDevGovGigsWidgetsAccountId) {
    linkProps.nearDevGovGigsWidgetsAccountId =
      props.nearDevGovGigsWidgetsAccountId;
  }

  if (props.referral) {
    linkProps.referral = props.referral;
  }

  const linkPropsQuery = Object.entries(linkProps)
    .filter(([_key, nullable]) => (nullable ?? null) !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `/#/${nearDevGovGigsWidgetsAccountId}/widget/gigs-board.pages.${widgetName}${
    linkPropsQuery ? "?" : ""
  }${linkPropsQuery}`;
}
/* END_INCLUDE: "common.jsx" */

const Breadcrumbs = ({ classNames, path }) =>
  (path ?? null) === null ? (
    <></>
  ) : (
    <div
      aria-label="breadcrumb"
      className={["d-flex", classNames?.root ?? ""].join(" ")}
      style={{ backgroundColor: "#181818" }}
    >
      <ol className="breadcrumb d-flex align-items-end m-0 h-100">
        {path.map(({ isActive, label, pageId, params }) => (
          <li
            aria-current="page"
            className={[
              "breadcrumb-item d-flex",
              isActive ? "active" : "",
            ].join(" ")}
          >
            <a
              className={["text-white", classNames?.link ?? ""].join(" ")}
              href={href(pageId, params ?? {})}
              style={{ paddingBottom: 3, lineHeight: 1, fontWeight: 420 }}
            >
              {label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );

return Breadcrumbs(props);