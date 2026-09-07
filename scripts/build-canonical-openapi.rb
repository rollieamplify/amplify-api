require "json"
require "yaml"

root = File.expand_path("..", __dir__)
source_path = File.join(root, "openapi", "customer-api.json")
target_path = File.join(root, "openapi", "customer-api.yaml")

document = JSON.parse(File.read(source_path))
reviewed = [
  ["/v1/auth", "post"],
  ["/v1/faxes/send", "post"],
  ["/v1/faxes/forward", "post"]
]

document["info"]["description"] = <<~TEXT.strip
  Canonical contract for the Amplify customer-facing API. This YAML file is
  the source of truth for Postman and Mintlify. Operations marked with
  x-amplify-validation-status: pending were migrated from the legacy Postman
  collection and must be validated before their contract is considered final.
TEXT

document.fetch("paths").each do |path, path_item|
  path_item.each do |method, operation|
    next unless %w[get post put patch delete options head trace].include?(method)

    operation["x-amplify-validation-status"] = reviewed.include?([path, method]) ? "validated" : "pending"
  end
end

File.write(target_path, YAML.dump(document).sub(/\A---\s*\n/, ""))
puts "Wrote #{target_path}"
